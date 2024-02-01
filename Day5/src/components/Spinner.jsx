import { Loader, Placeholder } from 'rsuite';
const Spinner = () => {
  return (
    <div>
        <Placeholder.Paragraph rows={8} />
        <Loader center content="loading" />
    </div>
  )
}

export default Spinner