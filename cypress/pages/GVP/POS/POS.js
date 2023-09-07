class pos {
    elements = {
      //estaticos
      claroLogo: () => cy.get('.claro-logo'),
      solapaPOS: () => cy.get('#divBtn-components_Sidebar-pos > .siderbar-act > .item-link-container'),
      descripPOS: () => cy.get('.description-input-text'),
      tablaEntidades: () => cy.get('#table-PosPage_Subagents-subagentSTable'),
      btnFlechaEntidad: () => cy.get('#button-TableForm_index-action3'), //indicar la fila del vendedor p que funcione
      btnAltaPOS: () => cy.get('#btn-PosPage_Pos-onCreate'),
      campoPartido: () => cy.get('[id="input-addressMfe-address.district"]'),
      campoCPA: () => cy.get('[id="input-addressMfe-address.postalCode"]'),
      btnGuardarNuevo: () => cy.get('#btn-PosActions_index-onCreate'),
      tablaPuntosVentas: () => cy.get('#table-PosPage_Pos-table'),
      btnEditarPuntoVenta:() => cy.get('#button-TableForm_index-editAction5'),
      btnDetallePuntoVenta:() => cy.get('#button-TableForm_index-detailsAction5'),
      btnEliminarPuntoVenta:() => cy.get('#button-TableForm_index-deleteAction5'),
      btnGuardarCambios: () => cy.get('#btn-PosActions_index-onUpdate'),
      btnDarBaja: () => cy.get('#btn-Pos_DeleteModal-onDelete') ,
      //Editables
      campoCodigo: () => cy.get('[id="input-PosActions_PosForm-aentDescriptiveCode"]'),
      campoNombre: () => cy.get('[id="input-PosActions_PosForm-aentDescription"]'),
      campoTelefono: () => cy.get('[id="input-PosActions_PosForm-aentTelephoneNumber"]'),
      campoLimiteCredito: () => cy.get('[id="input-PosActions_PosForm-aentCreditLimit"]'),
      campoFechaAlta: () => cy.get('[id="datepicker-PosActions_PosForm-pos.aentStartDate"]'),
      campoCP: () => cy.get('[id="input-addressMfe-address\.zipCode"]'),
      campoCalle : () => cy.get('[id="input-addressMfe-address\.street"]'),
      campoPiso : () => cy.get('[id="input-addressMfe-address\.floor"]'),
      campoDepto : () => cy.get('[id="input-addressMfe-address\.flat"]'),
      campoNroCalle : () => cy.get('[id="input-addressMfe-address.number"]'),
      campoEntidad: () => cy.get('#input-PosPage_index-agentName'),
      campoMotivoBaja: () => cy.get('#textarea-Pos_DeleteModal-aentObservations'),
      //desplegables
      listaProvincia: () => cy.get('[id="select-addressMfe-address.geuDescription"]'),
      listaCiudad:  () => cy.get('[id="select-addressMfe-address.city"]'),
     
      
      //Emergente
      
      mensajeEmergente: () => cy.get('.ant-notification-notice'),
      //titulos
      tituloCodigo: () => cy.get('span').contains('Código'),
      tituloDomicilio: () => cy.get('h2').contains('Datos del domicilio'),
      //elementos contenidos en un desplegable/ opciones
      elegirOpcionListas: (opcion) => cy.get('.ant-select-item-option-content').contains(opcion) ,
     
    };
  //H2

    irSolapaPOS(){
      this.elements.solapaPOS().click();
    }
   
    tipearEntidad(entidad){
      this.elements.campoEntidad().type(entidad);
    }
    
    verificarNombreEntidad(nombreEntidad){
      this.elements.descripPOS().should('have.text', nombreEntidad)
    }

    seleccionarEntidad(entidad){
        this.elements.tablaEntidades().contains('tr', entidad).within(() => {
          this.elements.btnFlechaEntidad().click();
        });
    }

    clickAltaPOS(){
      this.elements.btnAltaPOS().click();
    }

    tipearCodigo(codigo){
      this.elements.campoCodigo().type(codigo);
      this.elements.tituloCodigo().click();
    }

    abrirListaProvincia(provincia){
      this.elements.listaProvincia().click({force: true});
      this.elements.elegirOpcionListas(provincia).click();
    }

    abrirListaLocalidad(localidad){
      this.elements.listaCiudad().click({force: true});
      this.elements.listaCiudad().type(localidad, {force: true});
      this.elements.elegirOpcionListas(localidad).click();
    }
   
    tipearNombre(nombre){
      this.elements.campoNombre().clear().type(nombre);
    }

  
    tipearLimiteCredito(LimiteCredito){
      this.elements.campoLimiteCredito().clear().type(LimiteCredito);
    }

    tipearTelefono(tel){
      this.elements.campoTelefono().clear().type(tel);
    }

    
    tipearFechaAlta(FechaAlta){
      this.elements.campoFechaAlta().type(FechaAlta, {force:true});
    }


    tipearCalle(calle){
      this.elements.campoCalle().clear().type(calle);
    }

    tipearNroCalle(nrocalle){
      this.elements.campoNroCalle().clear().type(nrocalle);
    }
    

    verificarCampoPartido(nombrePartido){
      this.elements.campoPartido().should('have.value', nombrePartido)
    }

    verificarCodigoPostal(cp){
      this.elements.campoCP().should('have.value', cp)
    }

    verificarCPA(cpa){
      this.elements.campoCPA().should('have.value', cpa)
    }

    seleccionarPOS(pos){
      this.elements.listaPOS().click({force:true});
      this.elements.opcionListas(pos).click();
    }

    tipearPiso(piso){
      cy.wait(1000);
      this.elements.campoPiso().clear().type(piso);
    }

    tipearDepartamento(depto){
      this.elements.campoDepto().clear().type(depto);
    }

    verificarTituloDomicilio(){
      this.elements.tituloDomicilio().should('exist');
      this.elements.tituloDomicilio().click();
    }

    clickGuardarNuevo(){
      this.elements.btnGuardarNuevo().click();
    }
    verificarMensajeExitoso(){
      this.elements.mensajeEmergente().should('be.visible');
      this.elements.mensajeEmergente().should('have.text', 'Alta de POSEl POS fue creado correctamente.');
    }

    verificarMensajeExitosoGenerico(mensaje){
      this.elements.mensajeEmergente().should('be.visible');
      this.elements.mensajeEmergente().should('have.text', mensaje);
    }


    clickModificarPuntoVenta(codigo){
      cy.contains('Fecha Alta').click();
      cy.contains('Fecha Alta').click();

      this.elements.tablaPuntosVentas().contains('tr', codigo).within(() => {
        this.elements.btnEditarPuntoVenta().click();
      });
    }

    clickDetallePuntoVenta(codigo){
      cy.contains('Fecha Alta').click();
      cy.contains('Fecha Alta').click();

      this.elements.tablaPuntosVentas().contains('tr', codigo).within(() => {
        this.elements.btnDetallePuntoVenta().click();
      });
    }

    clickEliminarPuntoVenta(codigo){
      cy.contains('Fecha Alta').click();
      cy.contains('Fecha Alta').click();
      
      this.elements.tablaPuntosVentas().contains('tr', codigo).within(() => {
        this.elements.btnEliminarPuntoVenta().click();
      });
      
    }

    tipearMotivoBaja(baja){
      this.elements.campoMotivoBaja().type(baja)
    }

    clickDarDeBaja(){
      this.elements.btnDarBaja().click();
    }
    clickGuardarCambios(){
      this.elements.btnGuardarCambios().click()
    }

    logout() {
      this.elements.logoutButtom().click({force:true});
    }
   
  }
  module.exports = new pos();

 
  


