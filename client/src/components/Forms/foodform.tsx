import { useState } from 'react';
/* import './foodform.css'; */

const MyComponent = () => {
  const [upperGroup, setUpperGroup] = useState('');
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState(0);
  const [unit, setUnit] = useState('kg');
  const [showProduct, setShowProduct] = useState(false);

  const handleUpperGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUpperGroup(event.target.value);
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProduct(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
  };
  const handleButtonClick = () => {
    setShowProduct(true); // toggle the value of showProduct
  };
  return (
    <div>
      <label htmlFor="upperGroup">Upper Group</label>
      <select id="upperGroup" value={upperGroup} onChange={handleUpperGroupChange}>
        <option value="">Select Upper Group</option>
        <option value="bakliyat">Bakliyat</option>
        <option value="içecek">İçecek</option>
        <option value="süt">Süt Ürünleri</option>
        <option value="şarküteri">Şarküteri</option>
        <option value="et">Et Ürünleri</option>
        <option value="yağ">Yağ</option>
        <option value="temel">Temel Gıda</option>
        <option value="sebze">Sebze</option>
        <option value="meyve">Meyve</option>
        <option value="mama">Bebek Maması</option>
        
      </select>

      {upperGroup && (
        <>
          <label htmlFor="product">Product</label>
          <select id="product" value={product} onChange={handleProductChange}>
            <option value="">Select Product</option>
            {upperGroup === 'bakliyat' && (
              <>
                <option value="pirinç">Pirinç</option>
                <option value="bulgur">Bulgur</option>
                <option value="mercimek">Mercimek</option>
                <option value="yeşilmercimek">Yeşil Mercimek</option>
                <option value="makarna">Makarna</option>
             
              </>
            )}
            {upperGroup === 'içecek' && (
              <>
                <option value="su">Su</option>
                <option value="meşrubat">Meşrubat</option>
              </>
            )}
            {upperGroup === 'süt' && (
              <>
                <option value="süt">Süt</option>
                <option value="yoğurt">Yoğurt</option>
                <option value="peynir">Peynir</option>
              </>
            )}
             {upperGroup === 'şarküteri' && (
              <>
                <option value="tereyağı">Tereyağı</option>
                <option value="margarin">Margarin</option>
                <option value="zeytin">Zeytin</option>
                <option value="yumurta">Yumurta</option>
                <option value="sucuk">Sucuk</option>
                <option value="salam">Salam</option>
                <option value="sosis">Sosis</option>
              </>
            )}
             {upperGroup === 'et' && (
              <>
                <option value="beyaz">Beyaz Et</option>
                <option value="kırmızı">Kırmızı Et</option>
                
              </>
            )}
             {upperGroup === 'yağ' && (
              <>
                <option value="zeytin">Zeytinyağı</option>
                <option value="ayçiçek">Ayçiçek Yağ</option>
              
              </>
            )}
            {upperGroup === 'temel' && (
              <>
                <option value="un">Un</option>
                <option value="tuz">Tuz</option>
                <option value="şeker">Şeker</option>
                <option value="çay">Çay</option>
                <option value="salça">Salça</option>
              </>
            )}
            {upperGroup === 'sebze' && (
              <>
                <option value="domates">Domates</option>
                <option value="biber">Biber</option>
                <option value="soğan">Soğan</option>
                <option value="patates">Patates</option>
                <option value="yemeklik">Yemeklik Sebze</option>
              </>
            )}
               {upperGroup === 'meyve' && (
              <>
                <option value="portakal">Portakal</option>
                <option value="elma">Elma</option>
                
              </>
            )}
               {upperGroup === 'mama' && (
              <>
                <option value="mama">Bebek Maması</option>
              
              </>
            )}
          </select>

          {product && (
            <>
              <label htmlFor="amount">Amount</label>
              <input id="amount" type="number" value={amount} onChange={handleAmountChange} />

              <label htmlFor="unit">Unit</label>
              <select id="unit" value={unit} onChange={handleUnitChange}>
                <option value="kg">kg</option>
                <option value="lt">lt</option>
                <option value="unit">unit</option>
              </select>

              <button onClick={handleButtonClick}>Add the Product</button>

          {showProduct && <p> The Selected Amount is: {product} {amount} {unit}</p>}
            </>
          )}
        </>
      )}
    </div>
  );
};


//Form Action eklenecek

export default MyComponent;
