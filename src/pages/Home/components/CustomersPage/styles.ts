import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  lowOpacity: {
    opacity: 0.35,
  },
  redFont: {
    color: '#4231',
  },
  contentToLeft: {justifyContent: 'flex-end', color: 'red'},
  lightRed: {backgroundColor: '#e0aa8f'},
  cardStyle: {
    width: '96%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '97%',
    marginTop: 5,
  },
  searchOrCreateCustomer: {
    marginBottom: 5,
    flexDirection: 'row',
    width: '100%',
    height: 45,
  },
  searchBar: {
    flex: 1,
  },
  newCustomerButton: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  newCustomerButtonContent: {
    height: '100%',
  },
});

export default styles;
