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
  // company
  {
    items: {
      bannerName: "会社概要",
      englishName: "Company",
      bannerUrl: require("@/assets/image/company.jpg"),
    },
    tableData: {
      list: [{
          title: "会社名",
          content: "株式会社オネストインフォ",
        },
        {
          title: "設立",
          content: "平成30年1月",
        },
        {
          title: "資本金",
          content: "2000万円",
        },
        {
          title: "所在地",
          content: "〒103-0003 東京都中央区日本橋横山町7-17 オフィス日本橋8階802号室",
        },
        {
          title: "電話番号",
          content: "03-5843-6794",
        },
        {
          title: "ファクス",
          content: "03-5843-6794",
        },
        {
          title: "メールアドレス",
          content: "hr@honest-info.co.jp",
        },
        {
          title: "取引銀行",
          content: "三菱UFJ銀行",
        },
      ],
      picture: require("@/assets/image/company02.jpg"),
    },
  },
  // Service
  {
    items: {
      bannerName: "事業内容",
      englishName: "Service",
      bannerUrl: require("@/assets/image/service.jpg"),
    },
    tableData: {
      list: [{
          title: "①",
          content: "ソフトウェアの設計・開発",
        },
        {
          title: "②",
          content: "ホームページのデザイン・構築・運営",
        },
        {
          title: "③",
          content: "パッケージ開発・導入・保守",
        },
        {
          title: "④",
          content: "流通・製造業のソリューション",
        },
        {
          title: "⑤",
          content: "日・中・英の技術翻訳など",
        },
      ],
      picture: [require("@/assets/image/company02.jpg")],
    },
  },
  // Recruit
  {
    items: {
      bannerName: "採用情報",
      englishName: "Recruit",
      bannerUrl: require("@/assets/image/recruit.jpg"),
    },
    tableData: {
      list: [{
          title: "募集職種",
          content: "プロジェクトマネージャー(PM)",
        },
        {
          title: "仕事内容",
          content: "ホームページのデザイン・構築・運営",
        },
        {
          title: "技術分野",
          content: "Java、Struts、 Spring、 Terasoluna、intra-mart、 Oracle、DB2、 PL/SQL、C/C++/VC++、C#、VB.NET、COBOL、Python、PHP、 Ruby on Rails、IOS、 Android、SAP ABAPなど",
        },
        {
          title: "応募条件",
          content: "IT関連の大学・専門学校卒業のシステム、アプリ設計・開発経験者",
        },
        {
          title: "給与",
          content: "経験／スキルより優遇",
        },
        {
          title: "休日休暇",
          content: "完全週休2日制（土・日）、祝日",
        },
        {
          title: "就業時間",
          content: "9:00～18:00　※プロジェクトにより若干異なります",
        },
        {
          title: "応募方法",
          content: "お気軽に履歴書・経歴書を電子メールにて hr@honest-info.co.jp 宛にご送付くださいませ。",
        },
      ],
      picture: [require("@/assets/image/company02.jpg")],
    },
  },
  // Privacy Policy
  {
    items: {
      bannerName: "個人情報保護方針",
      englishName: "Privacy Policy",
      bannerUrl: require("@/assets/image/privacy.jpg"),
    },
    tableData: {
      list: [{
        title: "個人情報保護方針",
        content: "",
      }, ],
      picture: [require("@/assets/image/company02.jpg")],
    },
  },
  // contact
  {
    items: {
      bannerName: "お問い合わせ",
      englishName: "Contact",
      bannerUrl: require("@/assets/image/contactus.jpg"),
    },
    tableData: {
      list: [{
          title: "TEL",
          content: "03-5843-6794",
        },
        {
          title: "FAX",
          content: "03-5843-6794",
        },
        {
          title: "E-mail",
          content: "hr@honest-info.co.jp",
        },
      ],
      picture: [require("@/assets/image/company02.jpg")],
    },
  },
];

export {
  indexData,
  detailsData,
}