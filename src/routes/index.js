import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

const RenderRoutes = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default RenderRoutes;
