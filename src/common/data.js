let indexData = {
  news: "当社では、新型コロナウイルス等の感染予防・拡大防止対策として、+" +
    "お打ち合わせ等で当社の事業所にご来社される方に対して、マスクの着用をお願いしております。" +
    "また、入室の際には当社事業所内に備え付けているアルコール消毒液による手指消毒も併せてお願いしております。" +
    "ご理解・ご協力を賜りますようお願い申し上げます。",

  cardData: [{
      title: "会社概要",
      content: "日々進化するIT環境の中で、社員の技術力を磨きつつ、お客様のニーズに融合させ、共に発展し続けていける企業を目指します。",
      imgUrl: require("@/assets/image/company.jpg"),
      link: "Company",
    },
    {
      title: "経営理念",
      content: "誠実と信頼を礎に、互いの立場を尊重し合い、win-winの関係を築き、情報ビジネスの繁栄に貢献したい所存です。",
      imgUrl: require("@/assets/image/principium.jpg"),
      link: "Privacy",
    },
    {
      title: "事業内容",
      content: "業務システム開発、パッケージソフト開発、人材派遣等の事業を展開しております。",
      imgUrl: require("@/assets/image/service.jpg"),
      link: "Service",
    },
    {
      title: "人材募集",
      content: "社員それぞれが自身の生活を大切にしながら、持てる力を仕事で最大限に発揮し、やり甲斐を感じられる職場づくりに取り組んで参ります。",
      imgUrl: require("@/assets/image/recruit.jpg"),
      link: "Recruit",
    },
  ],

  collapseData: [{
      title: "ご挨拶",
      content: "古代から今日に至るまで、日本も中国も 「誠実・信用」" +
        "を道徳の涵養の基礎とし、信義を重んじできました。" +
        "株式会社オネストインフォは、古来の美徳を基に誠意を持って、誠実な情報を開示し、" +
        "お客様のご要望に応える信頼性の高いサービスを提供するとともに、社員の期待に沿える職場環境作りを目指し、" +
        "国際社会に貢献するために邁進致します。古代から今日に至るまで、日本も中国も" +
        "「誠実・信用」 を道徳の涵養の基礎とし、信義を重んじできました。" +
        "株式会社オネストインフォは、古来の美徳を基に誠意を持って、誠実な情報を開示し、" +
        "お客様のご要望に応える信頼性の高いサービスを提供するとともに、社員の期待に沿える職場環境作りを目指し、" +
        "国際社会に貢献するために邁進致します。",
      name: "1",
    },
    {
      title: "会社概要",
      content: "日々進化するIT環境の中で、社員の技術力を磨きつつ、お客様のニーズに融合させ、共に発展し続けていける企業を目指します",
      name: "2",
    },
    {
      title: "経営理念",
      content: "誠実と信頼を礎に、互いの立場を尊重し合い、win-winの関係を築き、情報ビジネスの繁栄に貢献したい所存です。",
      name: "3",
    },
    {
      title: "事業内容",
      content: "業務システム開発、パッケージソフト開発、人材派遣等の事業を展開しております。",
      name: "4",
    },
    {
      title: "人材募集",
      content: "社員それぞれが自身の生活を大切にしながら、持てる力を仕事で最大限に発揮し、やり甲斐を感じられる職場づくりに取り組んで参ります。",
      name: "5",
    },
  ],
};

let detailsData = [
  // Company
  {
    items: {
      bannerName: "会社概要",
      englishName: "Company",
      bannerUrl: require("@/assets/image/company.jpg"),
    },
  },
  // Service
  {
    items: {
      bannerName: "事業内容",
      englishName: "Service",
      bannerUrl: require("@/assets/image/service.jpg"),
    },
  },
  // Recruit
  {
    items: {
      bannerName: "採用情報",
      englishName: "Recruit",
      bannerUrl: require("@/assets/image/recruit.jpg"),
    },


  },
  // Privacy Policy
  {
    items: {
      bannerName: "個人情報保護方針",
      englishName: "Privacy Policy",
      bannerUrl: require("@/assets/image/privacy.jpg"),
    },

  },
  // Contact
  {
    items: {
      bannerName: "お問い合わせ",
      englishName: "Contact",
      bannerUrl: require("@/assets/image/contactus.jpg"),
    },
  },
];

export {
  indexData,
  detailsData,
}