export interface Evolution {
    name: string;
    id: number;
    url: string;
    game_index: number;
    is_hidden: boolean;
    height: number;
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

export interface EvolutionList {
    list:Evolution[]
    id: number
    name: string
    limit: number;
    offset: number;
    total: number;
    firmness: number
    isLoading: boolean;
    imagePokemonList: ImagePokemon;
    background:number;
    EvolutionDetailsList :EvolutionDetails[]
    EvolutionChainList: EvolutionChain[]
    EvolutionTriggerlist:EvolutionTrigger[]
  }


  

  export interface Language {
    name: string;
    url: string;
  }

  export interface names {
    name: string;
  }


  
  export interface EvolutionDetails {
    item: null | any; // You can replace 'any' with a more specific type if needed.
    trigger: EvolutionTrigger;
    gender: null | any; // You can replace 'any' with a more specific type if needed.
    held_item: null | any; // You can replace 'any' with a more specific type if needed.
    known_move: null | any; // You can replace 'any' with a more specific type if needed.
    known_move_type: null | any; // You can replace 'any' with a more specific type if needed.
    location: null | any; // You can replace 'any' with a more specific type if needed.
    min_level: number;
    min_happiness: null | any; // You can replace 'any' with a more specific type if needed.
    min_beauty: null | any; // You can replace 'any' with a more specific type if needed.
    min_affection: null | any; // You can replace 'any' with a more specific type if needed.
    needs_overworld_rain: boolean;
    party_species: null | any; // You can replace 'any' with a more specific type if needed.
    party_type: null | any; // You can replace 'any' with a more specific type if needed.
    relative_physical_stats: null | any; // You can replace 'any' with a more specific type if needed.
    time_of_day: string;
    trade_species: null | any; // You can replace 'any' with a more specific type if needed.
    turn_upside_down: boolean;
  }
  
  export interface EvolutionChain {
    id: number;
    baby_trigger_item: null | any; // You can replace 'any' with a more specific type if needed.
    chain: {
      is_baby: boolean;
      species: {
        name: string;
        url: string;
      };
      evolution_details: null | EvolutionDetails[];
      evolves_to: EvolutionChain[];
    };
  }

  export interface EvolutionTrigger {
    id: number;
    name: string;
    names: {
      name: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    pokemon_species: {
      name: string;
      url: string;
    }[];
  }