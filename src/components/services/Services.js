import React from "react";
import classnames from "classnames";

import Service from "./Service";

import {
  BrandRecognition,
  DetailedRecords,
  FullyCustomizable
} from "../../assets/images";

import styles from "../../scss/components/Services.module.scss";

const Services = () => {
  const services = [
    {
      title: "brand recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      icon: BrandRecognition
    },
    {
      title: "detailed records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: DetailedRecords
    },
    {
      title: "fully custiomizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: FullyCustomizable
    }
  ];

  return (
    <div className={classnames(styles.services, "text-center")}>
      <h1>advanced statistics</h1>
      <p className={styles.intro}>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <div className={styles.list}>
        {services.map(({ title, description, icon }) => (
          <Service
            key={title}
            title={title}
            description={description}
            IconComponent={icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
