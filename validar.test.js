const validar= require('./validar')

test ('email -> true',()=>{
    expect(validar.isValido('email')).toBe(true);
})

test ('email -> jtrue',()=>{
    expect(validar.isValido('email')).toBe(false);
})