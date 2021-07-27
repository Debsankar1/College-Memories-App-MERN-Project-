import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  media: {
    height: 0,
    paddingTop: '76.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    width: '100%',
    position: 'relative',
    backgroundBlendMode: 'darken'
  },
  overlay: {
    position: 'absolute',
    top: '182px',
    left: '10px',
    color: 'white',
    
  },
  overlay2: {
    position: 'absolute',
    top: '8px',
    right: '10px',
    color: 'white',
    
  },
  grid: {
    display: 'flex',
    
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    
  },
});
