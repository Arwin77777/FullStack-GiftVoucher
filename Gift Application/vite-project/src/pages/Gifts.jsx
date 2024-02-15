import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Button, Grid } from '@mui/material';

const Gifts = () => {
  const q = 2;

  const [gid, setGid] = React.useState('');
  const [tid, setTid] = React.useState('');

  const handleGiftId = (giftId) => {
    setGid(giftId);
    console.log(gid);
  };

  const handleThemeId = (themeId) => {
    setTid(themeId);
    console.log(tid);
  };

  const [gifts, setGifts] = React.useState([]);
  const [themes, setThemes] = React.useState([]);
  const token = localStorage.getItem('token');

  React.useEffect(() => {
    fetchCartItems();
    fetchThemes();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/admin/get/gift', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setGifts([...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchThemes = async () => {
    try {
      const response = await axios.get('http://localhost:8181/api/admin/get/theme', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setThemes([...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const tok= localStorage.getItem('token');
      console.log(tok)
      const response = await axios.post(`http://localhost:8181/api/${gid}/${tid}/${q}`,null, {
        headers: {
          Authorization: `Bearer ${tok}`
        }
      });
      console.log("Response:", response);
      alert("Added to Cart....");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div style={{ marginLeft: '200px' }}>
      <Grid container spacing={3}>
        {gifts.map(gift => (
          <Grid item xs={12} key={gift.giftId}>
            <Card style={{ borderRadius: '20px', border: '0px 0px 10px 0px' }}>
              <CardMedia
                sx={{ height: 300, width: 300, marginLeft: '5%' }}
                image={gift.giftImageUrl}
                style={{ objectFit: 'cover' }}
                title="gift image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {gift.giftName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {gift.giftDetails}
                </Typography>
                <Typography variant="body2" color="black">
                  ₹{gift.giftPrice}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleGiftId(gift.giftId)} size="small">Add Gift</Button>
              </CardActions>
              <Grid container spacing={1}>
                {themes.map(theme => (
                  <Grid item key={theme.themeId}>
                    <Card style={{ borderRadius: '20px', border: '0px 0px 10px 0px' }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {theme.themeName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {theme.themeDetails}
                        </Typography>
                        <Typography variant="body2" color="black">
                          ₹{theme.themePrice}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button onClick={() => handleThemeId(theme.themeId)} size="small">Add Theme</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            <Button onClick={handleSubmit} type="submit">Add to Cart</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Gifts;
