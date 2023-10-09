import express from 'express';

const reality = (assetsUrl) => ({
  dum01: {
    title: "Dřevostavba v japonském stylu",
    text: "Úchvatná dřevostavba v japonském stylu nabízí zážitek z exotické elegance a klidu. Tento majestátní dům je zasazen do přírody a okamžitě vás uchvátí svou harmonií s okolím. Tradiční japonská architektura se snoubí s moderním komfortem, přinášejíc vám pohodlí i krásu. Velká veranda, která obklopuje dům, vám umožní užívat si krásné výhledy na zahradu a okolní krajinu.",
    price: 15000000,
    city: "Horní Ploskonosy",
    contact: {
      name: "Petra Nová",
      email: "petra.nova@reality.cz",
      phone: "+420 777 888 999",
    },
    photo: `${assetsUrl}/house01.jpg`,
  },
  dum02: {
    title: "Vilka na předměstí",
    text: "Tato elegantní vila na předměstí je dokonalým spojením luxusu a pohodlí. Nachází se v klidné čtvrti, obklopená stromy a krásnou zahradou, což vytváří pocit soukromí a klidu. Rozlehlý obývací prostor s vysokými stropy a velkými okny přináší do domu spoustu přirozeného světla. Velká kuchyně s moderními spotřebiči je snem každého kuchaře. Navíc máte k dispozici venkovní terasu a bazén, ideální pro rodinné grilování a relaxaci.",
    price: 26000000,
    city: "Malopotocké Údolí",
    contact: {
      name: "Roman Blažek",
      email: "roman.blazek@realitka.cz",
      phone: "+420 606 707 808",
    },
    photo: `${assetsUrl}/house02.jpg`,
  },
  dum03: {
    title: "Moderní dům s bazénem",
    text: "Tento moderní dům je architektonickým skvostem a zároveň ideálním místem pro život plný pohodlí a zábavy. Otevřený koncept interiéru propojuje elegantní obývací prostor s kuchyní a jídelnou, vytvářející ideální prostředí pro setkávání s rodinou a přáteli. Skleněné stěny přinášejí do domu spoustu světla a výhledy na krásný bazén a zahradu. Bazénová terasa je vybavena grilem a venkovním posezením, což je dokonalé pro letní oslavy.",
    price: 50000000,
    city: "Staré Hodějovice",
    contact: {
      name: "Robert Ivanov",
      email: "robert.ivanov@realitka.cz",
      phone: "+420 603 514 515",
    },
    photo: `${assetsUrl}/house03.jpg`,
  },
  dum04: {
    title: "Útulný domeček",
    text: "Tento útulný domeček vás okouzlí svou jedinečnou kombinací pohodlí a komunity. Nachází se mezi ostatními domky v klidné a přátelské čtvrti, kde si můžete užívat výhody sousedského prostředí. Domek s kouzelným venkovním vzhledem vás vítá svou pohostinností. Interiér je zařízen tak, aby byl útulný a funkční, s důrazem na domácí pohodlí. Můžete si užívat své ranní kávy na malém balkónku a později se spojit s přáteli a sousedy na společném grilování v zahradě. Tento domeček je ideálním místem pro ty, kteří touží po harmonii mezi soukromím a společenským životem.",
    price: 5000000,
    city: "Radostice nad Ohří",
    contact: {
      name: "Jitka Chalupníková",
      email: "jitka.chalupnikova@realitka.cz",
      phone: "+420 627 313 414",
    },
    photo: `${assetsUrl}/house04.jpg`,
  },
});

export const realitkaRouter = express.Router();

realitkaRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const serverUrl = process.env.SERVER_URL ?? `${req.protocol}://${req.get('host')}`;
  const data = reality(`${serverUrl}${process.env.BASE_URL ?? ''}/assets`);
  if (data[id]) {
    res.status(200).json(data[id]);
  } else {
    res.status(404);
  }
});
