import React, { useState } from "react";
import ProCatSection from "../../components/partials/ProductCategorySection";
import ProductsHeader from "../../components/partials/ProductsHeader";

import frContent from "../../public/locales/fr/common";
import arContent from "../../public/locales/arab/common";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

import frProducts from "../../Data/Products";
import ProductsAR from "../../Data/ProductsAR";

import ProductBox from "../../components/partials/ProductBox";

import { useRouter } from "next/router";
import Link from "next/link";

const Products = () => {
  const router = useRouter();
  const { locale, locales, asPath } = useRouter();

  /* categories */
  const [isCategoOpen, setCategoOpen] = useState(true);
  /* filter number of products to display*/
  const [filterNBRProducts, setNumberPro] = useState(11);
  /* filter products per categories */
  const [produstFilter, setProductsFilter] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  /* display products on Grid or Rows */
  const [displayGrid, setGrid] = useState(true);
  /* filter By */
  const [filterBY, setFilterBy] = useState("productName");

  /* Products */
  let ProductsData = locale === "fr" ? frProducts : ProductsAR;
  /* filtring the productData */
  switch (filterBY) {
    case "price":
      ProductsData.sort(
        (a, b) =>
          (a.price.length - b.price.length) * a.price.localeCompare(b.price)
      );
      break;
    case "productName":
      ProductsData.sort((a, b) => a.productName.localeCompare(b.productName));
      break;
    case "category":
      ProductsData.sort((a, b) => a.category.localeCompare(b.category));
      break;
  }

  /* internationalisation content */
  const content = locale === "fr" ? frContent : arContent;

  const handleFilterBy = (e) => {
    setFilterBy(e.target.value);
  };

  const handleGrid = (e) => {
    setGrid(e);
  };

  const handleNBRpro = (e) => {
    setNumberPro(e.target.value);
  };
  const handleClick = () => {
    setCategoOpen(!isCategoOpen);
  };
  const filter = (e) => {
    setProductsFilter({ ...produstFilter, [e.target.id]: e.target.checked });
  };
  let i = 0;

  // categories
  const catNavigation = [
    "MATERIEL INFORMATIQUE",
    "HORLOGERIE",
    "Matériels Pédagogique",
    "JEUX EDUCATIFS",
    "LOGICILE",
    "CALCUL",
    "Machine à écrire",
    "DESSIN",
    "Tablette et Accessoires",
    "DIVERS",
  ];
  const categories =
    locale === "fr"
      ? [
          ["MATERIEL INFORMATIQUE", 4],
          ["HORLOGERIE", 3],
          ["Matériels Pédagogique", 6],
          ["JEUX EDUCATIFS", 5],
          ["LOGICILE", 3],
          ["CALCUL", 3],
          ["Machine à écrire", 5],
          ["DESSIN", 7],
          ["Tablette et Accessoires", 2],
          ["DIVERS", 2],
        ]
      : [
          ["المعدات", 4],
          ["ساعات", 3],
          ["المواد التعليمية", 6],
          ["الألعاب التعليمية", 5],
          ["البرمجيات", 3],
          ["حساب", 3],
          ["آلة كاتبة", 5],
          ["الرسومات", 7],
          ["الكمبيوتر وملحقاته", 4],
          ["متنوع", 2],
        ];

  return (
    <div>
      <ProductsHeader content={content} locale={locale}></ProductsHeader>
      <div className="lg:pl-20">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-3 px-5">
            <div
              className={`${
                locale === "fr"
                  ? "flex-row mr-auto"
                  : "flex-row-reverse ml-auto"
              } flex font-semibold text-xl py-2 border-b-2 categories border-custom-dark-blue dark:border-custom-green w-fit gap-3 `}
            >
              {content.products.categories}
              <img
                src={isCategoOpen ? "/imgs/up.png" : "/imgs/Down.png"}
                className="mt-2 cursor-pointer dark:hidden block"
                onClick={handleClick}
                width="25px"
                alt="open"
              ></img>
              <img
                src={isCategoOpen ? "/imgs/greenUp.png" : "/imgs/greenDown.png"}
                className="mt-2 cursor-pointer hidden dark:block"
                onClick={handleClick}
                width="22px"
                alt="close"
              ></img>
            </div>
            <div className={isCategoOpen ? "block " : "hidden"}>
              {categories.map((cat, key) => (
                <div
                  key={key}
                  className={`${
                    locale === "fr" ? "flex-row" : "flex-row-reverse"
                  } text-sm w-full flex justify-between py-2`}
                >
                  <Link href={`/products/categories/${catNavigation[key]}`}>
                    <div
                      className={`${
                        locale === "fr" ? "flex-row" : "flex-row-reverse"
                      } flex gap-1 hover:px-2 cursor-pointer`}
                    >
                      <div>{cat[0].toUpperCase()} </div>
                      <div>( {cat[1]} )</div>
                    </div>
                  </Link>

                  <label className="container">
                    <input
                      type="checkbox"
                      className="accent-custom-green rounded-full cursor-pointer"
                      onChange={filter}
                      id={key}
                    ></input>
                    <span className="checkmark"></span>
                  </label>
                </div>
              ))}
            </div>
            <div className={`${isCategoOpen ? "block" : "hidden"}`}></div>
          </div>
          <div className="col-span-9  xl:pr-16 lg:px-8 md:px-4 ">
            <div
              className={`${
                locale === "fr" ? "flex-row" : "flex-row-reverse"
              }  dark:bg-gray-700 00 bg-gray-50 flex justify-between mt-4 px-4 py-2 `}
            >
              <div
                className={
                  locale === "fr"
                    ? "flex flex-row gap-2"
                    : "flex flex-row-reverse gap-2"
                }
              >
                <label>{content.filtring.filtrerpar}</label>
                <select
                  id="filter"
                  name="filter"
                  className="mx-2 rounded-full px-1 bg-white dark:bg-gray-700 border-2 outline-none"
                  onChange={handleFilterBy}
                >
                  <option value="productName">{content.filtring.nom}</option>
                  <option value="price">{content.filtring.price}</option>
                  <option value="category">{content.filtring.cat}</option>
                </select>
              </div>
              <div
                className={
                  locale === "fr"
                    ? "flex flex-row gap-2"
                    : "flex flex-row-reverse gap-2"
                }
              >
                {content.filtring.afficher}
                <input
                  type="number"
                  name="Numberproducts"
                  className="w-20 pl-2 border-2 rounded-full"
                  onChange={handleNBRpro}
                  placeholder={filterNBRProducts}
                ></input>
              </div>
              <div
                className={`${
                  locale === "fr" ? "flex-row" : "flex-row-reverse"
                }  md:flex gap-1 hidden `}
              >
                {content.filtring.afficherEn}
                <div>
                  <button onClick={() => handleGrid(true)}>
                    <BsFillGrid3X3GapFill className="text-xl my-auto " />
                  </button>
                </div>
                <div>
                  <button onClick={() => handleGrid(false)}>
                    <FaBars className="text-xl my-auto " />
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`bg-gray-50 dark:bg-gray-800 my-4 ${
                displayGrid ? "grid md:grid-cols-3" : "block"
              }`}
            >
              {ProductsData.map((pro, key) => {
                if (
                  produstFilter[
                    [
                      "MATERIEL INFORMATIQUE",
                      "HORLOGERIE",
                      "Matériels Pédagogique",
                      "JEUX EDUCATIFS",
                      "LOGICILE",
                      "CALCUL",
                      "Machine à écrire",
                      "DESSIN",
                      "Tablette et Accessoires",
                      "DIVERS",
                    ].indexOf(pro.category)
                  ] ||
                  (!produstFilter[0] &&
                    !produstFilter[1] &&
                    !produstFilter[2] &&
                    !produstFilter[3] &&
                    !produstFilter[4] &&
                    !produstFilter[5] &&
                    !produstFilter[6] &&
                    !produstFilter[7] &&
                    !produstFilter[8] &&
                    !produstFilter[9])
                ) {
                  i += 1;
                }
                return (
                  <div
                    className={`bg-transparent
                ${
                  (produstFilter[
                    [
                      "MATERIEL INFORMATIQUE",
                      "HORLOGERIE",
                      "Matériels Pédagogique",
                      "JEUX EDUCATIFS",
                      "LOGICILE",
                      "CALCUL",
                      "Machine à écrire",
                      "DESSIN",
                      "Tablette et Accessoires",
                      "DIVERS",
                    ].indexOf(pro.category)
                  ] ||
                    (!produstFilter[0] &&
                      !produstFilter[1] &&
                      !produstFilter[2] &&
                      !produstFilter[3] &&
                      !produstFilter[4] &&
                      !produstFilter[5] &&
                      !produstFilter[6] &&
                      !produstFilter[7] &&
                      !produstFilter[8] &&
                      !produstFilter[9])) &&
                  filterNBRProducts >= i
                    ? "block"
                    : "hidden"
                }
                `}
                    key={key}
                  >
                    <ProductBox
                      // disp={`${moreProducts && i > 4 ? "hidden" : "block"}`}
                      className={`${
                        filterNBRProducts > key ? "block" : "hidden"
                      }`}
                      product={pro}
                      grid={displayGrid}
                      content={content}
                      id={pro.id}
                    ></ProductBox>
                    <hr className={`${!displayGrid ? "block" : "hidden"}   `} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
