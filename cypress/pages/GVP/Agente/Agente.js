class agente {
    elements = {
      //estaticos
      claroLogo: () => cy.get('.claro-logo'),
      solapaVendedores: () => cy.get('#divBtn-components_Sidebar-vendedores'),
      descripVendedor: () => cy.get(':nth-child(2) > .description-input-text'),
      tablaEntidades: () => cy.get('#table-SellersPage_Subagents-subagentsTable'),
      btnFlechaEntidad: () => cy.get('#button-TableForm_index-action3'), //indicar la fila del vendedor p que funcione
      btnAltaVendedor: () => cy.get('#btn-SellersPage_Sellers-onCreate'),
      filaEntidad: (entidad) => cy.get('data-row-key="'&entidad&'"'),
      ckbxIncluirVendBaja: () => cy.get('#checkbox-SellersPage_Sellers-oldSellers'),
      btnBorrarVendedor: () => cy.get('#button-TableForm_index-deleteAction7'), //indicar la fila del vendedor p que funcione
      btnEditarVendedor: () => cy.get('#button-TableForm_index-editAction7'), //indicar la fila del vendedor p que funcione
      btnDetalleVendedor: () => cy.get('#button-TableForm_index-detailsAction7'), //indicar la fila del vendedor p que funcione
      tablaVendedores: () => cy.get('[id="table-SellersPage_Sellers-table"]'),
      btnGuardarCambios: () => cy.get('#btn-SellerActions_index-onCreate'),
      btnGuardarCambiosMod: () => cy.get('#btn-SellerActions_index-onUpdate'),
      btnDardeBaja: () => cy.get('#btn-Sellers_DeleteModal-onDelete'),
      logoutButtom: () => cy.get('#divBtn-components_Sidebar-logout'),
      irProximaPagSubTabla:() => cy.get('[title="Next Page"]').eq(1),
      checkBoxBajaVendedores:() => cy.get('#checkbox-SellersPage_Sellers-oldSellers'),
      //Editables
      campoEntidad: () => cy.get('#input-SellersPage_index-agentName'),
      campoIdentificacion: () => cy.get('[id="input-SellerActions_SellerForm-seller\.veaDni"]'),
      campoNombre: () => cy.get('[id="input-SellerActions_SellerForm-seller\.veaNombre"]'),
      campoApellido: () => cy.get('[id="input-SellerActions_seller\.veaApellido"]'),
      campoCelular: () => cy.get('[id="input-SellerActions_SellerForm-seller\.veaCelular"]'),
      campoEmail: () => cy.get('[id="input-SellerActions_SellerForm-seller\.veaEmail"]'),
      campoFechaAlta: () => cy.get('[id="input-SellerActions_SellerForm-structure\.vesFechaDesde"]'),
      campoLimiteCredito: () => cy.get('[id="input-SellerActions_SellerForm-structure\.vesLimiteCredit"]'),
      campoObservaciones: () => cy.get('[id="textarea-SellerActions_SellerForm-seller\.veaObservaciones"]'),
      campoFechaBaja: () => cy.get('[id="datepicker-Sellers_DeleteModal-vesFechaHasta"]'),
      campoMotivoBaja: () => cy.get('#textarea-Sellers_DeleteModal-vesMotivo'),
      //desplegables
      listaTipoIdentificacion: () => cy.get('[id="input-SellerActions_SellerForm-seller.veaIdentificationType"]'),
      listaGenero: () => cy.get('[id="input-SellerActions_SellerForm-seller.veaSexo"]'),
      listaTipoVendedor: () => cy.get('[id="input-SellerActions_SellerForm-seller.tveId"]'),
      listaPOS: () => cy.get('[id="select-SellerActions_SellerForm-structure.vesAentDescriptiveCode"]'),
      
      //Emergente
      
      mensajeEmergente: () => cy.get('.ant-notification-notice'),
      //titulos
     
      //elementos contenidos en un desplegable/ opciones
      opcionListas: (opcion) => cy.get('.ant-select-item-option-content').contains(opcion) ,
     
    };
  //H2

    irSolapaVendedores(){
      this.elements.solapaVendedores().click();
    }
   
    tipearEntidad(entidad){
      this.elements.campoEntidad().type(entidad);
    }
    
    verificarNombreEntidad(nombreEntidad){
      this.elements.descripVendedor().should('have.text', nombreEntidad)
    }

    seleccionarEntidad(entidad){
        this.elements.tablaEntidades().contains('tr', entidad).within(() => {
          this.elements.btnFlechaEntidad().click();
        });
    }

    clickAltaVendedor(){
      this.elements.btnAltaVendedor().click();
    }

    verDetalleVendedor(id){
      this.elements.tablaVendedores().contains('tr', id).within(() => {
        this.elements.btnDetalleVendedor().click();
      });
    }

    clickModificarVendedor(id){
      this.elements.tablaVendedores().contains('tr', id).within(() => {
        this.elements.btnEditarVendedor().click();
      });
    }

    verificarTablaVendedor(){

      this.elements.tablaVendedores().should('be.visible');

      /*this.elements.tablaVendedores().contains('tr', id).within(() => {
        this.elements.btnEditarVendedor().click();
      });*/

    }

    clickEliminarVendedor(id){
      cy.contains('Fecha Alta').click();
      cy.contains('Fecha Alta').click();

      this.elements.tablaVendedores().contains('tr', id).within(() => {
        this.elements.btnBorrarVendedor().click();
      });

    }



    seleccionarTipoIdentificacion(tipoId){
      this.elements.listaTipoIdentificacion().click({force:true});
      this.elements.opcionListas(tipoId).click();
    }

    tipearNroDocumento(nrodoc){
      this.elements.campoIdentificacion().type(nrodoc);
    }
    
    tipearNombre(nombre){
      this.elements.campoNombre().type(nombre);
    }

    tipearApellido(apellido){
      this.elements.campoApellido().type(apellido);
    }
  
    tipearEmail(Email){
      this.elements.campoEmail().clear().type(Email);
    }

    tipearLimiteCredito(LimiteCredito){
      this.elements.campoLimiteCredito().clear().type(LimiteCredito);
    }

    tipearCelular(Celular){
      this.elements.campoCelular().clear().type(Celular);
    }

    tipearObservaciones(Observaciones){
      this.elements.campoObservaciones().clear().type(Observaciones);
    }

    tipearFechaAlta(FechaAlta){
      this.elements.campoFechaAlta().type(FechaAlta, {force:true});
    }

    seleccionarTipoVendedor(tipoVend){
      this.elements.listaTipoVendedor().click({force:true});
      this.elements.opcionListas(tipoVend).click();
    }

    seleccionarGenero(genero){
      this.elements.listaGenero().click({force:true});
      this.elements.opcionListas(genero).click();
    }

    seleccionarPOS(pos){
      this.elements.listaPOS().click({force:true});
      this.elements.opcionListas(pos).click();
    }

    clickGuardarCambios(){
      this.elements.btnGuardarCambios().click();
    }

    clickGuardarModificacion(){
      this.elements.btnGuardarCambiosMod().click();
    }

    clickProxPagSubtabla(){
      this.elements.irProximaPagSubTabla().click();
    }
  
    verificarMensajeExitoso(){
      this.elements.mensajeEmergente().should('be.visible');
      this.elements.mensajeEmergente().should('have.text', 'Alta de vendedorEl vendedor fue creado correctamente.');
    }


    verificarMensajeExitosoGenerico(mensaje){
      this.elements.mensajeEmergente().should('be.visible');
      this.elements.mensajeEmergente().should('have.text', mensaje);
    }

    clickDarDeBaja(){
      this.elements.btnDardeBaja().click();
    }

    tipearMotivoBaja(motivo){
      this.elements.campoMotivoBaja().type(motivo)
    }

    tipearFechaBaja(fechabaja){
      this.elements.campoFechaBaja().type(fechabaja, {force:true})
    }

    logout() {
      this.elements.logoutButtom().click({force:true});
    }

    verificarTipoEntidad(entidad, tipoent){
      this.elements.tablaEntidades().contains('tr', entidad).within(() => {
        cy.get('td').contains(entidad)
        cy.get('td').contains(tipoent)
      });
   }

   clickCheckBoxBajaVendedores(){
    this.elements.checkBoxBajaVendedores().click();  
   }
   
   verificarTablaBajaVendedor(){
    cy.contains('Fecha Alta').click();
    cy.contains('Fecha Alta').click();
      this.elements.tablaVendedores().contains('tr', '40805').within(() => {
        //cy.get('td').contains('40805')
        cy.get('td').contains('40805').and('12-05-2020')
      });  
   }

  }
  module.exports = new agente();

 
  