import { connect } from 'react-redux';
import ProductGrid from '../components/ProductGrid.jsx';

const mapStateToProps = state => ({
  products: state.entities.products.all,
});

export default connect (
  mapStateToProps,
)(ProductGrid);