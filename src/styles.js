import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{        /**here we just declear material ui class and method theme.breakpoint 
                                             when screen size is going to small gthen this block of code is runnuing and diplay the output is small responsively  */
    mainContainer: {
      flexDirection:'column-reverse'
    }

  }
  
}));
