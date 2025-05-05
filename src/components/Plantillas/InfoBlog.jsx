import React from 'react';
import Button from '../Atoms/Button.jsx';
import TextBlock from '../Atoms/TextBlock.jsx';

export default function Info({ items }) {
  return (
    <>
      {items.map((item, index) => {
        const isEven = index % 2 === 0; // true en 0,2,4...
        return (
          <section
            key={item.id}
            id={item.id}
            className="md:flex w-full py-10 bg-white mt-[8vw] scroll-mt-22 md:scroll-mt-32"
          >
            {/* TEXTO */}
            <div
              className={`
                space-y-8 px-[5vw] sm:px-16 pb-10 md:pb-0 xl:px-0 xl:pl-45
                md:w-6/10 flex flex-col
                ${isEven ? 'md:order-2' : 'md:order-1'}
              `}
            >
              <h2 className="text-3xl lg:text-4xl sm:text-left font-semibold text-(--color-primary)">
                {item.title}
              </h2>
              <div className="space-y-2">
                <TextBlock
                  subtitle={item.subtitle}
                  paragraph={item.paragraph}
                  subtitleSize={item.subtitleSize}
                  subtitleWeight={item.subtitleWeight}
                  subtitleAlign="justify-start"
                  paragraphAlign="justify-start"
                  marginX="mx-0"
                />
              </div>
              <div className="mt-0 flex justify-center sm:justify-start">
                <Button
                  text="Learn More"
                  onClick={() => window.open(item.linkUrl, "_blank")}
                  tipo={item.buttonTipo}
                  shadow={item.shadow}
                />
              </div>
            </div>

            {/* IMAGEN */}
            <div
              className={`
                pl-4 md:pl-0 md:w-4/10 xl:w-35/100 flex flex-col md:justify-center
                ${isEven ? 'md:order-1' : 'md:order-2'}
              `}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full align-bottom relative z-10"
              />
            </div>
          </section>
        );
      })}
    </>
  );
}
