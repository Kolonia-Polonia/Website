// Temporary royalty-free Unsplash placeholders matching the luxury
// black & white salon branding. Replace with final client assets.
const u = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

import founderPortrait from './common/biju_polonia.jpeg'

export const IMG = {
  salonInterior1: u('photo-1633681926035-ec1ac984418a'),
  salonInterior2: u('photo-1521590832167-7bcbfaa6381f'),
  salonInterior3: u('photo-1585747860715-2ba37e788b70'),
  salonInteriorWide: u('photo-1562322140-8baeececf3df', 1920),
  salonChairsRow: u('photo-1600948836101-f9ffda59d250'),
  haircutMen: u('photo-1599351431202-1e0f0137899a'),
  haircutMenClose: u('photo-1621605815971-fbc98d665033'),
  hairColorWoman: u('photo-1580618672591-eb180b1a973f'),
  hairStylingCurls: u('photo-1595476108010-b4d1f102b7dc'),
  hairWash: u('photo-1516975080664-ed2fc6a32937'),
  hairSpa: u('photo-1519014816548-bf5fe059798b'),
  beardGrooming: u('photo-1503951914875-452162b0f3f1'),
  beardGroomingClose: u('photo-1621607510231-1a6e59e37f24'),
  facial: u('photo-1570172619644-dfd03ed5d881'),
  facialClose: u('photo-1512290923902-8a9f81dc236c'),
  massage: u('photo-1544161515-4ab6ce6db874'),
  massageSpa: u('photo-1600334129128-685c5582fd35'),
  bridalMakeup: u('photo-1595475884562-073c30d45670'),
  bridalPortrait: u('photo-1583391733956-6c78276477e2'),
  groomMakeup: u('photo-1487412720507-e7ab37603c6f'),
  nailArt: u('photo-1604654894610-df63bc536371'),
  nailPolish: u('photo-1610992015732-2449b76344bc'),
  pedicure: u('photo-1519415510236-718bdfcd89c1'),
  threading: u('photo-1607779097040-26e80aa78e66'),
  beautyProducts: u('photo-1522335789203-aabd1fc54bc9'),
  happyCustomer1: u('photo-1487412720507-e7ab37603c6f'),
  happyCustomer2: u('photo-1524504388940-b1c1722653e1'),
  founderPortrait: founderPortrait,
  founderWorking: u('photo-1580618672591-eb180b1a973f'),
  branchInterior1: u('photo-1633681926035-ec1ac984418a'),
  branchInterior2: u('photo-1521590832167-7bcbfaa6381f'),
  branchInterior3: u('photo-1562322140-8baeececf3df'),
  heroHome: u('photo-1600948836101-f9ffda59d250', 1920),
  heroAbout: u('photo-1521590832167-7bcbfaa6381f', 1920),
  heroServices: u('photo-1585747860715-2ba37e788b70', 1920),
  heroGallery: u('photo-1633681926035-ec1ac984418a', 1920),
  heroContact: u('photo-1562322140-8baeececf3df', 1920),
};

export default IMG;
