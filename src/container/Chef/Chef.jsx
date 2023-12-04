import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Elevate Your Senses, Indulge in Perfection: Where Every Meal Is a Symphony of Flavors.</p>
        </div>
        <p className="p__opensans">At flavors, we believe in crafting culinary experiences that transcend the ordinary. We believe in sourcing only the finest, freshest ingredients, ensuring each dish is a testament to quality and flavor. We believe in the artistry of presentation, the warmth of hospitality, and the power of ambiance. Our commitment to excellence extends beyond the plate, embracing sustainability, community, and a dedication to creating moments of lasting indulgence for our discerning guests.</p>
      </div>

      <div className="app__chef-sign">
        <p>Krishna Kant Kisku</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
