import React, {useState, useEffect} from 'react';
import './App.css';

import ReactDOMServer from 'react-dom/server';

import OldSigTemplate from './sigs/rumpus';
import SigTemplateSmall from './sigs/LittleSig';
import AASignature from './sigs/aa';


function App() {
  const [activeSig, setActiveSig] = useState('OldSigTemplate');

  const [name, setName] = useState('Josh Wizzle');
  const [title, setTitle] = useState('Digital Marketing Dude of Sorts');
  const [mobile, setMobile] = useState('0405 000 000');
  const [email, setEmail] = useState('getded@extrazero.xyz');
  const [img, setImg] = useState('https://placebear.com/153/243');
  const [lineColor, setLineColor] = useState('#fcb415');

  const [website, setWebsite] = useState('extrazero.xyz');
  const [fullURL, setFullURL] = useState('https://extrazero.xyz');
  const [officePhone, setOfficePhone] = useState('02 4940 8686');
  const [address, setAddress] = useState('123 Fake St, North Sydney');

  const [linkedIn, setLinkedIn] = useState('https://extrazero.xyz');

  const [displayMoreVisibile, setDisplayMoreVisibile] = useState(false);
  const [sigOutput, setSigOutput] = useState(<OldSigTemplate name={name} title={title} mobile={mobile} email={email} img={img} lineColor={lineColor} href={fullURL} displayUrl={website} />);
  const [codeVisible, setCodeVisible] = useState(false);

  const logo = 'https://www.therumpusroom.com.au/wp-content/themes/rumpus/assets/img/logo.svg';

  const sigList = [
    { name: 'Rumpus', value : 'rumpus' },
    { name: 'Beech', value : 'beech' },
    { name: 'Alexander Appointments', value : 'aa' },
  ]

  function copySignature() {
    //const cb = navigator.clipboard;
    const sig = document.querySelector('.sig-container');

    // const { ClipboardItem } = window;

    // create a Range object
    let range = document.createRange();  
    
    // set the Node to select the "range"
    range.selectNode(sig);
    
    // add the Range to the set of window selections
    window.getSelection().addRange(range);
     
    // execute 'copy', can't 'cut' in this case
    document.execCommand('copy');
    
    //navigator.clipboard.writeText(finishedSignature);

    return;
  }


  useEffect( () => {
    console.log('Active!', activeSig)

    switch(activeSig) {
      case 'aa':
        setSigOutput(<AASignature name={name} title={title} mobile={mobile} email={email} img={img} lineColor={lineColor} logo={logo} href={fullURL} displayUrl={website} linkedIn={linkedIn} address={address} officePhone={officePhone} />);
        break;

      case 'beech':
        setSigOutput(<SigTemplateSmall name={name} title={title} mobile={mobile} email={email} img={img} lineColor={lineColor} logo={logo} href={fullURL} displayUrl={website} />);
        break;

      case 'rumpus':
        setSigOutput(<OldSigTemplate name={name} title={title} mobile={mobile} email={email} img={img} lineColor={lineColor} logo={logo} href={fullURL} displayUrl={website} />);
        break;

      default:
        setSigOutput(<OldSigTemplate name={name} title={title} mobile={mobile} email={email} img={img} lineColor={lineColor} logo={logo} href={fullURL} displayUrl={website} />);
        break;
    }

  }, [activeSig, name, title, mobile, img, lineColor, logo, fullURL, website, linkedIn, officePhone, email,]);



    function htmlProcess(str) {
        
      var div = document.createElement('div');
      div.innerHTML = str.trim();
      
      return htmlFormat(div, 0).innerHTML;
    }

    function htmlFormat(node, level) {
      
      var indentBefore = new Array(level++ + 1).join('  '),
          indentAfter  = new Array(level - 1).join('  '),
          textNode;
      
      for (var i = 0; i < node.children.length; i++) {
          
          textNode = document.createTextNode('\n' + indentBefore);
          node.insertBefore(textNode, node.children[i]);
          
          htmlFormat(node.children[i], level);
          
          if (node.lastElementChild === node.children[i]) {
              textNode = document.createTextNode('\n' + indentAfter);
              node.appendChild(textNode);
          }
      }
      
      return node;
    }


  return (
    <div className="App">
      <div className="heading-block">
        <h1 style={{borderBottomColor: lineColor}}>EMOLz</h1>
        <div className="inputGroup sigSelector">
        <label htmlFor='sigSelector'>Select a emol sig yo!</label>
        <select name="sigSelector" onChange={ (e) => { setActiveSig(e.target.value); console.log(e.target.value) } }>
          {sigList.map( (item, key) => {
            return(<option value={item.value} key={key}>{item.name}</option>);
          })}
        </select>
      </div>
      </div>
     
      <header className="App-header">   
        <form className='form-container'>
          <div className="inputGroup-row">
            <div className='inputGroup'>
              <label htmlFor='name'>Name</label>
              <input type='text' 
                  name='name' 
                  value={name} 
                  onChange={ (e) => { setName(e.target.value) }} />
            </div>
            <div className='inputGroup'>
              <label htmlFor='title'>Title</label>
              <input type='text' 
                  name='name' 
                  value={title} 
                  onChange={ (e) => { setTitle(e.target.value) }} />
            </div>
          </div>
          <div className="inputGroup-row">
            <div className='inputGroup'>
              <label htmlFor='mobile'>Mobile</label>
              <input type='text' 
                  name='mobile' 
                  value={mobile} 
                  onChange={ (e) => { setMobile(e.target.value) }} />
            </div>
            <div className='inputGroup'>
              <label htmlFor='email'>Email</label>
              <input type='text' 
                  name='email' 
                  value={email} 
                  onChange={ (e) => { setEmail(e.target.value) }} />
            </div>
          </div>
          <div className='inputGroup'>
            <label htmlFor='imgUrl'>Img URL</label>
            <input type='text' 
                name='imgUrl' 
                value={img} 
                onChange={ (e) => { setImg(e.target.value) }} />
          </div>
          <div className={ displayMoreVisibile ? "show-advanced" : "show-advanced hidden"}>
            <div className='inputGroup-row'>
              <div className='inputGroup'>
                  <label htmlFor='officePhone'>Office Phone</label>
                  <input type='text' 
                      name='officePhone' 
                      value={officePhone} 
                      onChange={ (e) => { setOfficePhone(e.target.value) }} />
                </div>
                <div className='inputGroup'>
                  <label htmlFor='linkedIn'>LinkedIn</label>
                  <input type='text' 
                      name='linkedIn' 
                      value={linkedIn} 
                      onChange={ (e) => { setLinkedIn(e.target.value) }} />
                </div>
              </div>
              <div className='inputGroup'>
                <label htmlFor='address'>Address</label>
                <textarea type='text' 
                    rows="2"
                    name='address' 
                    value={address} 
                    onChange={ (e) => { setAddress(e.target.value) }}>
                      {address} 
                </textarea>
              </div>
              <div className="inputGroup-row">
                <div className='inputGroup'>
                  <label htmlFor='website'>Website (Display)</label>
                  <input type='text' 
                      name='website' 
                      value={website} 
                      onChange={ (e) => { setWebsite(e.target.value) }} />
                </div>
                <div className='inputGroup'>
                  <label htmlFor='fullURL'>Full URL (the link)</label>
                  <input type='text' 
                      name='fullURL' 
                      value={fullURL} 
                      onChange={ (e) => { setFullURL(e.target.value) }} />
                </div>
              </div>
              <div className='inputGroup'>
                <label htmlFor='lineColor'>Line Colour</label>
                <input type='color' 
                    name='lineColor' 
                    value={lineColor} 
                    onChange={ (e) => { setLineColor(e.target.value) }} />
              </div>
          </div>
          <button onClick={ (e) => { e.preventDefault(); displayMoreVisibile ? setDisplayMoreVisibile(false) : setDisplayMoreVisibile(true); } } >{displayMoreVisibile ? 'LESS' : 'MORE'}</button>
        </form>
        <div className='sigTemplateContainer'>
          <div className='sig-container'>
            {sigOutput}
          </div>
          <div className='dual-buttons'>
            <button className="align-bottom" onClick={copySignature}>Copy Signature</button>
            <button className="align-bottom show-code" onClick={ () => { codeVisible ? setCodeVisible(false) : setCodeVisible(true);  }}>Code</button>
          </div>
          <div className={codeVisible ? "html visible" : "html"}>
            <pre>
              {htmlProcess(ReactDOMServer.renderToString(sigOutput))}
            </pre>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
