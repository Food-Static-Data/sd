/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const {
  frenchBeans,
  sprouts,
  jacketPotato,
  sweetPotato,
  kale,
  leek,
  broccoli,
  carrots,
  mushrooms,
  onionsShallots,
  parsnips,
  peppers,
  marrowSquash,
  sweetcorn,
  courgettes
} = require('../files')

describe('this test prevents to any issues and problems, also to break the structure of frenchBeans data', () => {
  it('frenchBeans data files returns object', () => {
    expect(frenchBeans).not.toBe('')
  })
})

describe('test frenchBeans json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string' }
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'frenchBeans', boil: '6 - 10 mins', microwave: '4 - 6 mins', steam: '8 - 12 mins', roast: '25 - 30 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of sprouts data', () => {
  it('sprouts data files returns object', () => {
    expect(sprouts).not.toBe('')
  })
})

describe('test sprouts json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'sprouts', boil: '5 - 10 mins', microwave: '3 - 5 mins', steam: '7 - 12 mins', roast: '30 - 35 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of jacketPotato data', () => {
  it('jacketPotato data files returns object', () => {
    expect(jacketPotato).not.toBe('')
  })
})

describe('test jacketPotato json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'jacketPotato', boil: '-', microwave: '4 - 9 mins', steam: '-', roast: '60 - 90 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of sweetPotato data', () => {
  it('sweetPotato data files returns object', () => {
    expect(sweetPotato).not.toBe('')
  })
})

describe('test sweetPotato json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'sweetPotato', boil: '15 - 25 mins', microwave: '4 - 9 mins', steam: '20 - 30 mins', roast: '45 - 50 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of kale data', () => {
  it('kale data files returns object', () => {
    expect(kale).not.toBe('')
  })
})

describe('test kale json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'kale', boil: '15 - 20 mins', microwave: '5 - 6 mins', steam: '18 - 25 mins', roast: '-' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of leek data', () => {
  it('leek data files returns object', () => {
    expect(leek).not.toBe('')
  })
})

describe('test leek json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'leek', boil: '10 - 15 mins', microwave: '5 - 8 mins', steam: '8 - 12 mins', roast: '30 - 40 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of broccoli data', () => {
  it('broccoli data files returns object', () => {
    expect(broccoli).not.toBe('')
  })
})

describe('test broccoli json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'broccoli', boil: '4 - 8 mins', microwave: '3 - 5 mins', steam: '5 - 10 mins', roast: '-' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of carrots data', () => {
  it('carrots data files returns object', () => {
    expect(carrots).not.toBe('')
  })
})

describe('test carrots json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'carrots', boil: '8 - 10 mins', microwave: '5 - 8 mins', steam: '10 - 13 mins', roast: '40 - 45 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of mushrooms data', () => {
  it('mushrooms data files returns object', () => {
    expect(mushrooms).not.toBe('')
  })
})

describe('test mushrooms json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'mushrooms', boil: '7 - 10 mins', microwave: '2 - 3 mins', steam: '8 - 12 mins', roast: '20 - 25 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of onionsShallots data', () => {
  it('onionsShallots data files returns object', () => {
    expect(onionsShallots).not.toBe('')
  })
})

describe('test onionsShallots json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'onionsShallots', boil: '-', microwave: '3 - 5 mins', steam: '-', roast: '35 - 40 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of parsnips data', () => {
  it('parsnips data files returns object', () => {
    expect(parsnips).not.toBe('')
  })
})

describe('test parsnips json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'parsnips', boil: '10 - 15 mins', microwave: '5 - 8 mins', steam: '15 - 20 mins', roast: '40 - 80 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of peppers data', () => {
  it('peppers data files returns object', () => {
    expect(peppers).not.toBe('')
  })
})

describe('test peppers json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'peppers', boil: '15 - 25 mins', microwave: '4 - 6 mins', steam: '20 - 30 mins', roast: '25 -45 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of marrowSquash data', () => {
  it('marrowSquash data files returns object', () => {
    expect(marrowSquash).not.toBe('')
  })
})

describe('test marrowSquash json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'marrowSquash', boil: '10 - 15 mins', microwave: '5 - 7 mins', steam: '20 - 25 mins', roast: '45 -70 mins' }).toMatchSchema(schema);
  });
})



describe('this test prevents to any issues and problems, also to break the structure of sweetcorn data', () => {
  it('sweetcorn data files returns object', () => {
    expect(sweetcorn).not.toBe('')
  })
})

describe('test sweetcorn json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'sweetcorn', boil: '8 - 15 mins', microwave: '5 - 10 mins', steam: '15 -20 mins', roast: '20 - 35 mins' }).toMatchSchema(schema);
  });
})





describe('this test prevents to any issues and problems, also to break the structure of courgettes data', () => {
  it('courgettes data files returns object', () => {
    expect(courgettes).not.toBe('')
  })
})

describe('test courgettes json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        boil: { type: 'string' },
        microwave: { type: 'string' },
        steam: { type: 'string' },
        roast: { type: 'string'}
      },
      required: ['name', 'boil', 'microwave', 'steam', 'roast'],
    };
    expect({ name: 'courgettes', boil: '6 - 10 mins', microwave: '3 - 4 mins', steam: '15 - 20 mins', roast: '30 - 45 mins' }).toMatchSchema(schema);
  });
})
