
import './App.css'

const cardData = [
  {
    title: 'FREE',
    price: '$0/month',
    data: [
      'Single user', 
      '50GB Storge',
      'Unlimited Public Project',
      'Community Access',
      'Unlimited Private Project',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Report']
    },
  {
    title: 'FREE',
    price: '$0/month',
    data: [
      'Single user', 
      '50GB Storge',
      'Unlimited Public Project',
      'Community Access',
      'Unlimited Private Project',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Report']
    },
  {
    title: 'FREE',
    plan: '$0/month',
    data: [
      'Single user', 
      '50GB Storge',
      'Unlimited Public Project',
      'Community Access',
      'Unlimited Private Project',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Report'
    ]
  }
];

  const cardpricing = () => {
    return (
      <div className='maincontainer'>
         
            <div className='free'>
              <div>
                  <h1>FREE</h1>
                  <h3>$0/month</h3>
               <div className='feature'>
                  <p> &#10004; Single user</p>
                  <p> &#10004; 50GB Storge</p>
                  <p> &#10004; Unlimited Public Project</p>
                  <p> &#10004; Community Access</p>
                  <p> &#10006; Unlimited Private Project</p>
                  <p> &#10006; Dedicated Phone Support</p>
                  <p> &#10006; Free Subdomain</p>
                  <p> &#10006; Monthly Status Report</p>
                </div>
              </div>
              <button>BUTTON</button>
            </div>
            <div className='plus'>
              <div>
                <h1>PLUS</h1>
                <h3>$9/month</h3>
                <div className='feature'>
                  <p> &#10004; Single user</p>
                  <p> &#10004; 50GB Storge</p>
                  <p> &#10004; Unlimited Public Project</p>
                  <p> &#10004; Community Access</p>
                  <p> &#10004; Unlimited Private Project</p>
                  <p> &#10004; Dedicated Phone Support</p>
                  <p> &#10004; Free Subdomain</p>
                  <p> &#10006; Monthly Status Report</p>
                </div>
              </div>
              <button>BUTTON</button>
            </div>
            <div className='gold'>
              <div>
                <h1>PRO</h1>
                <h3>$49/month</h3>
                <div className='feature'>
                  <p> &#10004; Single user</p>
                  <p> &#10004; 50GB Storge</p>
                  <p> &#10004; Unlimited Public Project</p>
                  <p> &#10004; Community Access</p>
                  <p> &#10004; Unlimited Private Project</p>
                  <p> &#10004; Dedicated Phone Support</p>
                  <p> &#10004; Free Subdomain</p>
                  <p> &#10004; Monthly Status Report</p>
                </div>
              </div>  
              <button>BUTTON</button>
            </div>
      </div>  
   
    );
  }
export default cardpricing
