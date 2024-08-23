import PropTypes from "prop-types";
export const IngredientType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image_mobile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
});
export const ModalType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  onClose: PropTypes.bool.isRequired,
});
export const CategoryTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  handleSelectItem: PropTypes.func.isRequired,
});
