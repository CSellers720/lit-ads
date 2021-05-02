enum ListingType {
  Buy = 'BUY',
  Sell = 'SELL',
  Null = ''
}

enum ListingCategory {
  Electronics = 'ELECTRONICS',
  Automotive = 'AUTO',
  Clothing = 'CLOTHING',
  Furniture = 'FURNITURE',
  Audio = 'AUDIO',
  Optical = 'OPTICAL',
  Misc = 'MISC',
  Null = '',
}

enum Tag {
  Used = 'USED',
  New = 'NEW',
  Broken = 'BROKEN',
  Scrap = 'SCRAP',
  Parts = 'PARTS',
  Computer = 'PC',
  Sport = 'SPORT',
  Car = 'CAR',
  Collectible = 'COLLECTIBLE',
  Instrument = 'INSTRUMENT',
}

interface ModalProps {
  showModal: boolean;
  modalPhase: number;
  userData: UserData;
  setUserData: (value: UserData) => void;
  setShowModal: (value: boolean) => void;
  setModalPhase: (value: number) => void;
}

interface ModalHeaderProps {
  modalPhase: number;
}

interface ModalBodyProps {
  modalPhase: number;
  userData: UserData;
  setUserData: (value: UserData) => void;
};

interface ModalFooterProps {
  modalPhase: number;
  incrementPhase: () => void;
  decrementPhase: () => void;
  toggle: () => void;
}

interface PhaseProps {
  userData: UserData;
  setUserData: (value: UserData) => void;
}

interface Phase0 {
  title: string;
  listing: ListingType;
  category: ListingCategory;
}

interface Phase1 {
  image: object | null;
  previewUrl: string;
  description: string;
  date: Date | null;
}

interface Phase2 {
  condition: number;
  tags: Array<Tag> | Array<null>;
  email: string;
  price: number;
}

interface Check {
  label: string;
  checked: boolean;
  value: ListingType | ListingCategory;
}

interface UserData {
  phase0: Phase0;
  phase1: Phase1;
  phase2: Phase2;
}

export default ModalProps;
export type {
  ModalHeaderProps, ModalFooterProps, UserData,
  ModalBodyProps, Phase0, Phase1, Phase2, Check,
  PhaseProps,
}
export {
  ListingType, ListingCategory, Tag,
}
