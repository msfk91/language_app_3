exports.Noun = function (sing, plural, status) {
    this.noun_pair = [sing, plural];
  
    this.sing = sing;
    this.si_trl = "";
    this.si_trl2 = "";
  
    this.plural = plural;
    this.pl_trl = "";

    this.showMenu="hide"

    this.being_si=[
      "the " + this.sing + " is",
      "the " + this.sing + " is good",
      "the " + this.sing + " is bad",
      "there is a " +this.sing,
      'there is no '+this.sing 
    ]
    this.being_pl=[
      "the " + this.plural + " are",
      "the " + this.plural + " are good",
      "the " + this.plural + " are bad",
      "there are " +this.plural,
      'there are no '+this.plural 
    ]
    if(status == 'h'){ 
      this.taking_si=[
        "The " + this.sing + " is taking",
        "I'm taking him / her (the " +this.sing+")",
        "You're taking him / her (the " +this.sing+")", 
        "He / She is taking him / her (the " +this.sing+")", 
        "The " + this.sing + " is not taking",
        "I'm not taking him / her (the " +this.sing+")",
        "You're not taking him / her (the " +this.sing+")", 
        "He / She is not taking him / her (the " +this.sing+")", 
      ]
    }else if(status == 'm'){
      this.taking_si=[
        "The " + this.sing + " is taking",
        "I'm taking him (the " +this.sing+")",
        "You're taking him (the " +this.sing+")", 
        "He / She is taking him (the " +this.sing+")", 
        "The " + this.sing + " is not taking",
        "I'm not taking him (the " +this.sing+")",
        "You're not taking him (the " +this.sing+")", 
        "He / She is not taking him (the " +this.sing+")", 
      ]
    }else if(status == 'f'){
      this.taking_si=[
        "The " + this.sing + " is taking",
        "I'm taking her (the " +this.sing+")",
        "You're taking her (the " +this.sing+")", 
        "He / She is taking her (the " +this.sing+")", 
        "The " + this.sing + " is not taking",
        "I'm not taking her (the " +this.sing+")",
        "You're not taking her (the " +this.sing+")", 
        "He / She is not taking her (the " +this.sing+")", 
      ]
    }else{
      this.taking_si=[
        "The " + this.sing + " is taking",
        "I'm taking it (the " +this.sing+")",
        "You're taking it (the " +this.sing+")", 
        "He / She is taking it (the " +this.sing+")", 
        "The " + this.sing + " is not taking",
        "I'm not taking it (the " +this.sing+")",
        "You're not taking it (the " +this.sing+")", 
        "He / She is not taking it (the " +this.sing+")", 
      
      ]
    }
      this.taking_pl=[
        "The " + this.plural + " are taking",
        "I'm taking them (the " +this.plural+")",
        "You're taking them (the " +this.plural+")", 
        "He / She is taking them (the " +this.plural+")", 
        "The " + this.plural + " are not taking",
        "I'm not taking them (the " +this.plural+")",
        "You're not taking them (the " +this.plural+")", 
        "He / She is not taking them (the " +this.plural+")", 
      
      ]
      
    if(status == 'h'){ 
      this.giving_si=[
        "The "+this.sing + " is giving",
        "I'm giving him / her (the " +this.sing+")",
        "You're giving him / her (the " +this.sing+")", 
        "He / She is giving him / her (the " +this.sing+")",
        "The "+ this.sing + " is not giving",
        "I'm not giving him / her (the " +this.sing+")",
        "You're not giving him / her (the " +this.sing+")", 
        "He / She is not giving him / her (the " +this.sing+")", 
      ]
    }else if(status == 'm'){
      this.giving_si=[
        "The "+this.sing + " is giving",
        "I'm giving him (the " +this.sing+")",
        "You're giving him (the " +this.sing+")", 
        "He / She is giving him (the " +this.sing+")",
        "The "+ this.sing + " is not giving",
        "I'm not giving him (the " +this.sing+")",
        "You're not giving him (the " +this.sing+")", 
        "He / She is not giving him (the " +this.sing+")", 
      ]
    }else if(status == 'f'){
      this.giving_si=[
        "The "+this.sing + " is giving",
        "I'm giving her (the " +this.sing+")",
        "You're giving her (the " +this.sing+")", 
        "He / She is giving her (the " +this.sing+")", 
        "The "+ this.sing + " is not giving",
        "I'm not giving her (the " +this.sing+")",
        "You're not giving her (the " +this.sing+")", 
        "He / She is not giving her (the " +this.sing+")", 
      
      ]
    }else{
      this.giving_si=[
        "The "+this.sing + " is gving",
        "I'm giving it (the " +this.sing+")",
        "You're giving it (the " +this.sing+")", 
        "He / She is giving it (the " +this.sing+")", 
        "The "+ this.sing + " is not giving",
        "I'm not giving it (the " +this.sing+")",
        "You're not giving it (the " +this.sing+")", 
        "He / She is not giving it (the " +this.sing+")", 
      
      ]
    } 
      this.giving_pl=[
        "The "+this.plural + " are giving",
        "I'm giving them (the " +this.plural+")",
        "You're giving them (the " +this.plural+")", 
        "He / She is giving them (the " +this.plural+")", 
        "The "+ this.plural + " are not giving",
        "I'm not giving them (the " +this.plural+")",
        "You're not giving them (the " +this.plural+")", 
        "He / She is not giving them (the " +this.plural+")",   
      ]
    

    this.adj_si=[
      "big "+this.sing,
      "small "+this.sing
    ]

    this.adj_pl=[
      "big "+this.plural,
      "small "+this.plural
    ]
    this.demon_si = [
      "this " + this.sing,
      "that (close) " + this.sing,
      "that (far) " + this.sing,
    ]

    this.demon_si_trl=[]

    this.demon_si_class=[]

    this.demon_pl = [
      "this " + this.plural,
      "that (close) " + this.plural,
      "that (far) " + this.plural,
    ]

    this.demon_pl_trl=[]

    
  
    this.basic_poss = [
      "my",
      "your",
      "his / her",
      "of (one)",
      "our",
      "yalls",
      "their",
      "of (many)"
    ];
  
    this.poss_si = [];
  
    this.basic_poss.map((poss, index) => {
      if (index === 3 || index === 7) {
          this.poss_si.push(
            this.sing + " " + poss,
          )
      } else {
          this.poss_si.push(
            poss + " " + this.sing,
          )
        
      }
    });
  
    this.poss_pl = [];
  
    this.basic_poss.map((poss, index) => {
      if (index === 3 || index === 7) {
        return(
          this.poss_pl.push(
            this.plural + " " + poss,  
          )
        )
      } else {
          return(
            this.poss_pl.push(
              poss + " " + this.plural,  
            )
        )
      }
    });
  
}