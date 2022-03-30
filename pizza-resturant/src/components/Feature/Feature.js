import React from "react";
import{FeatureContainer,FeatureButton} from './FeatureStyles'

const Feature = () => {
    return (
        <FeatureContainer>
          <h1>Pizza of Day</h1>
          <p>Vegan Pizza with vegan cheese!</p>
          <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
      );
};

export default Feature;