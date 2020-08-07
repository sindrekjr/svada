const svada = require('./svada');

describe('svada.js', () => {
  it('should be able to return generell svada', () => {
    expect(svada('generell')).toBeDefined();
  });

  it('should be able to return arkivsvada', () => {
    expect(svada('arkiv')).toBeDefined();
  });

  it('should be able to return bistandssvada', () => {
    expect(svada('bistand')).toBeDefined();
  });

  it('should be able to return forsikringssvada', () => {
    expect(svada('forsikring')).toBeDefined();
  });

  it('should be able to return forsvarssvada', () => {
    expect(svada('forsvar')).toBeDefined();
  });

  it('should be able to return helseadministrativ svada', () => {
    expect(svada('helse')).toBeDefined();
  });

  it('should be able to return klimasvada', () => {
    expect(svada('klima')).toBeDefined();
  });

  it('should be able to return plan- og byggesvada', () => {
    expect(svada('plan')).toBeDefined();
    expect(svada('bygg')).toBeDefined();
  });

  it('should be able to return matsvada', () => {
    expect(svada('mat')).toBeDefined();
  });

  it('should be able to return universitets- og høgskolesvada', () => {
    expect(svada('uni')).toBeDefined();
    expect(svada('skole')).toBeDefined();
    expect(svada('universitet')).toBeDefined();
  });
})