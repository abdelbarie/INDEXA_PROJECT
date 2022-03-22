import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PlanSite = () => {
  const { locale, locales, isPath } = useRouter();
  const plan =
    locale === "fr"
      ? [
          "ACCEUIL",
          "PRODUIT",
          "MATERIEL INFORMATIQUE",
          "HORLOGERIE",
          "MATÉRIELS PÉDAGOGIQUE",
          "JEUX EDUCATIFS",
          "CALCUL",
          "LOGICILE",
          "MACHINE À ÉCRIRE",
          "DESSIN",
          "TABLETTE ET ACCESSOIRES ",
          "DIVERS",
          "A PROPOS",
          "CONTACT",
          "NOS CENTRES"
        ]
      : [
          "الرئيسية",
          "المنتجات",
          "اعلام الي",
          "ساعات",
          "المواد التعليمية",
          "الألعاب التعليمية",
          "حساب",
          "البرمجيات",
          " أدوات الكتابة",
          "الرسومات",
          " الملحقات",
          "متنوع",
          "معلومات عنا",
          "تواصل معنا",
          "مراكزنا"
        ];
  return (
    <div
      className={`${
        locale === "fr" ? "text-left" : "text-right"
      } md:px-16 lg:px-36 pb-20 pt-10`}
    >
      <div className="text-lg font-semibold ">
        <Link href="/">
          <a className="hover:text-custom-green hover:px-2">{plan[0]}</a>
        </Link>
      </div>
      <div className="text-lg font-semibold ">
        <Link href="/products">
          <a className="hover:text-custom-green hover:px-2">{plan[1]}</a>
        </Link>
        <div className="px-10 font-light font-sm">{plan[2]}</div>
        <div className="px-10 font-light font-sm">{plan[3]} </div>
        <div className="px-10 font-light font-sm">{plan[4]} </div>
        <div className="px-10 font-light font-sm">{plan[5]}</div>
        <div className="px-10 font-light font-sm">{plan[6]} </div>
        <div className="px-10 font-light">{plan[7]} </div>
        <div className="px-10 font-light font-sm">{plan[8]}</div>
        <div className="px-10 font-light font-sm">{plan[9]} </div>
        <div className="px-10 font-light font-sm">{plan[10]} </div>
        <div className="px-10 font-light font-sm">{plan[11]} </div>
      </div>
      <div className="text-lg font-semibold ">
        <Link href="/about">
          <a className="hover:text-custom-green hover:px-2"> {plan[12]}</a>
        </Link>
      </div>
      <div className="text-lg font-semibold ">
        <Link href="/contact">
          <a className="hover:text-custom-green hover:px-2">{plan[13]} </a>
        </Link>
      </div>
      <div className="text-lg font-semibold ">
        <Link href="/centre">
          <a className="hover:text-custom-green hover:px-2">{plan[14]} </a>
        </Link>
      </div>
    </div>
  );
};

export default PlanSite;
