import ItemCard from '../components/ItemCard';
import { useNavigate } from 'react-router-dom';

export default function ItemPage() {

  const items = [
    {
      name: 'Laptop',
      price: 999.99,
      quantity: 20,
      image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
    },
    {
      name: 'Training Voucher dasd',
      price: 50.00,
      quantity: 20,
      image: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w='
    },
    {
      name: 'Tennis Ball',
      price: 10.00,
      quantity: 10
    },
    {
      name: 'Tennis Ball',
      price: 10.00,
      quantity: 10
    },
    {
      name: 'Tennis Ball',
      price: 10.00,
      quantity: 10
    },
    {
      name: 'Tennis Ball',
      price: 10.00,
      quantity: 10
    },
    {
      name: 'Tennis Ball',
      price: 10.00,
      quantity: 10
    },
    {
      name: 'Tennis Ball',
      price: 10.00,
      quantity: 10
    },

  ];


  const navigate = useNavigate();

  const handleAddItemClick = () => {
    navigate('/items/add-item');
  };

  return (
    <div className='item-page'>
      <div className='add-data-button'>
        <button className="button-31" role="button" onClick={handleAddItemClick}>Add Item</button>
      </div>
      <div className='item-list'>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}
