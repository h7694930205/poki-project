export interface Move {
    id: number;
    url: string;
    name: string;
    accuracy: number;
    effect_chance: number;
    priority: number;
    background :number
    fontColor:number
    power: number;
    contest_combos: ContestType[]
    contest_effect: ContestEffect[]
    damage_class: MoveDamageClass[]
    past_values: PastMoveStatValues[]
    stat_changes: MoveStatChange[]
}

export interface MoveMetaData {
    min_hits: number;
    max_hits: number;
    min_turns: number;
    max_turns: number;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}


export interface MoveDamageClass {
  id: number;
  name: string;
}

export interface ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  
}


export interface IMoveStatChange {
  change: number;

}
export interface ContestType {
  id: number;
  name: string;
}

export interface MoveStatChange {
    change: number;
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

  export interface PastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
  }
export interface MoveList {
    list:Move[]
    id: number
    name: string
    limit: number;
    offset: number;
    total: number;
    isLoading: boolean;
    imagePokemonList: ImagePokemon;
  }


  export interface Language {
    name: string;
    url: string;
  }

  export interface names {
    name: string;
  }



export  interface MoveDeailts {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: null | number; // You can replace 'number' with a more specific type if needed.
    pp: number;
    priority: number;
    power: number;
    contest_combos: {
      normal: {
        use_before: {
          name: string;
          url: string;
        }[] | null;
        use_after: null;
      };
      super: {
        use_before: null;
        use_after: null;
      };
    };
    contest_type: {
      name: string;
      url: string;
    };
    contest_effect: {
      url: string;
    };
    damage_class: {
      name: string;
      url: string;
    };
    effect_entries: {
      effect: string;
      short_effect: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    effect_changes: any[]; // You can replace 'any' with a more specific type if needed.
    generation: {
      name: string;
      url: string;
    };
    meta: {
      ailment: {
        name: string;
        url: string;
      };
      category: {
        name: string;
        url: string;
      };
      min_hits: null;
      max_hits: null;
      min_turns: null;
      max_turns: null;
      drain: number;
      healing: number;
      crit_rate: number;
      ailment_chance: number;
      flinch_chance: number;
      stat_chance: number;
    };
    names: {
      name: string;
      language: {
        name: string;
        url: string;
      };
    }[];
    past_values: any[]; // You can replace 'any' with a more specific type if needed.
    stat_changes: any[]; // You can replace 'any' with a more specific type if needed.
    super_contest_effect: {
      url: string;
    };
    target: {
      name: string;
      url: string;
    };
    type: {
      name: string;
      url: string;
    };
    learned_by_pokemon: {
      name: string;
      url: string;
    }[];
    flavor_text_entries: {
      flavor_text: string;
      language: {
        url: string;
        name: string;
      };
      version_group: {
        url: string;
        name: string;
      };
    }[];
  }

  