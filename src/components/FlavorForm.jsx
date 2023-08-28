import { useState } from 'react';
import { SIZE_PRICES, FLAVOR_PRICES, TOPPING_PRICE } from '../helpers/prices';


function FlavorForm() {
    const [numOfIceCreams, setNumOfIceCreams] = useState(1);
    const [iceCreamSelections, setIceCreamSelections] = useState([]);
      
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [hasTopping, setHasTopping] = useState(false);
  const [selectedTopping, setSelectedTopping] = useState('');  // Nuevo estado para guardar el topping seleccionado
  const [paymentMethod, setPaymentMethod] = useState('');
 

  function handleSubmit(event) {
    event.preventDefault();
    // Crear la fecha y hora actuales
    const currentDateTime = new Date().toISOString().slice(0, 16);
    alert(`Size: ${selectedSize}, Flavor: ${selectedFlavor}, Topping: ${hasTopping ? 'Yes' : 'No'}, Total: $${total}, Payment Method: ${paymentMethod}, Date and Time: ${currentDateTime}`);
}

function handleIceCreamChange(index, field, value) {
    const newSelection = { ...iceCreamSelections[index], [field]: value };

    // Aquí se calcula el precio basado en la selección
    newSelection.price = SIZE_PRICES[newSelection.size] || 0 
        + FLAVOR_PRICES[newSelection.sabor] || 0 
        + (newSelection.topping && newSelection.topping !== 'no' ? TOPPING_PRICE : 0);

    const newSelections = [...iceCreamSelections];
    newSelections[index] = newSelection;
    setIceCreamSelections(newSelections);
}
const total = iceCreamSelections.reduce((sum, selection) => sum + (selection.price || 0), 0);

  return (
    <div>
        <div>
            <label>
                ¿Cuántas nieves deseas?
                <select value={numOfIceCreams} onChange={(e) => {
                    setNumOfIceCreams(Number(e.target.value));
                    setIceCreamSelections(Array(Number(e.target.value)).fill({}));
                }}>
                    <option value="1">1 Nieve</option>
                    <option value="2">2 Nieves</option>
                    <option value="3">3 Nieves</option>
                    {/* ... y así sucesivamente ... */}
                </select>
            </label>
        </div>

        {Array.from({ length: numOfIceCreams }).map((_, index) => (
            <div key={index}>
                <h3>Nieve {index + 1}</h3>
                <form onSubmit={handleSubmit}>
      <div>
      <label>
            Selecciona el tamaño:
            <select 
                value={iceCreamSelections[index]?.size || ''}
                onChange={(e) => handleIceCreamChange(index, 'size', e.target.value)}
            >
                <option value="chico">Chico</option>
                <option value="grande">Grande</option>
                <option value="medioLitro">1/2 Litro</option>
                <option value="unLitro">1 Litro</option>
            </select>
        </label>
      </div>

      <div>
                <label>
                    ¿Deseas topping?
                    <select 
                        value={iceCreamSelections[index]?.topping || ''}
                        onChange={(e) => handleIceCreamChange(index, 'topping', e.target.value)}
                    >
                        <option value="no">No</option>
                        <option value="yes">Sí</option>
                    </select>
                </label>
            </div>

            {iceCreamSelections[index]?.topping === 'yes' && (
                <div>
                    <label>
                        Selecciona un topping:
                        <select 
                            value={iceCreamSelections[index]?.selectedTopping || ''}
                            onChange={(e) => handleIceCreamChange(index, 'selectedTopping', e.target.value)}
                        >
                            <option value="">--Selecciona un topping--</option>
                            <option value="topping1">Topping 1</option>
                            <option value="topping2">Topping 2</option>
                            <option value="topping3">Topping 3</option>
                        </select>
                    </label>
                </div>
            )}
            

      <div>
        <label>
          Choose a flavor:
          <select value={iceCreamSelections[index]?.sabor || ''} onChange={(e) => handleIceCreamChange(index, 'sabor',e.target.value)}>
            <option value="">--Selecciona un sabor--</option>
            <option value="flavor1">Flavor 1</option>
            <option value="flavor2">Flavor 2</option>
            <option value="flavor1">Flavor 3</option>
            <option value="flavor2">Flavor 4</option>
            <option value="flavor1">Flavor 5</option>
            <option value="flavor2">Flavor 6</option>
            <option value="flavor1">Flavor 7</option>
            <option value="flavor2">Flavor 8</option>
            <option value="flavor9">Flavor 9</option>
          </select>
        </label>
      </div>

      <div>
        <label>
            Método de Pago:
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="">--Selecciona un método de pago--</option>
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta</option>
            </select>
        </label>
    </div>

      <h4>Total: ${total}</h4>

      <button type="submit">Submit</button>

    </form>
            </div>
        ))}

    <button type="submit">Submit</button>

    <div>
        Total: ${total}
    </div>

</div>    
);}

export default FlavorForm;
