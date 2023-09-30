export interface Contest {
    id: number;
    name: string;
    appeal: number;
    jam: number;
    url: string;
    background :number
    fontColor:number
}

export interface ImagePokemon {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    name: string;
    url: string;
    id: number;
  }

  interface ContestTypes {
    id: number;
    name: string;
    berry_flavor: {
      name: string;
      url: string;
    };
    names: {
      name: string;
      color: string;
      language: {
        name: string;
        url: string;
      };
    }[];
  }
  
  interface contestEffect {
    id: number;
    appeal: number;
    jam: number;
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
    }[];
  }

  interface SuperContestEffects {
    id: number;
    appeal: number;
    flavor_text_entries: {
      flavor_text: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    moves: {
      name: string;
      url: string;
    }[];
  }
  
  

export interface ContestList {
    list:Contest[]
    id: number
    name: string
    limit: number;
    offset: number;
    total: number;
    flavor_text_entries:FlavorText[]
    effect_entries: Effect[]
    isLoading: boolean;
    isContestEffectsLoading:boolean;
    isSuperContestEffectsLoading:boolean;
    imagePokemonList: ImagePokemon;
  }


  export interface FlavorText {
    flavor_text: string;
    language:Language[]
  }
  export interface Effect{
    effet: string;
  }

  export interface Language {
    name: string;
    url: string;
  }

  export interface names {
    name: string;
  }
