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
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  setActive: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  onClose: PropTypes.bool.isRequired,
});
