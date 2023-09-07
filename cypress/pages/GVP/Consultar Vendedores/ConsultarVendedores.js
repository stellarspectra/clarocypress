class consultaVendedores {
    elements = {
      //estaticos
      claroLogo: () => cy.get('.claro-logo'),
      solapaConsultaVendedores: () => cy.get('#divBtn-components_Sidebar-consultaVendedores'),
      btnBuscar: () => cy.get('button').contains('Buscar'),
      tablaResultados: () => cy.get('#table-SearchPage_index-table'),
      //Editables
      campoDNI: () => cy.get('#input-SearchPage_index-veaDni'),
      campoNombre: () => cy.get('[id="input-SellerActions_SellerForm-seller\.veaNombre"]'),

      //desplegables
     
      
      //Emergente
      
      mensajeEmergente: () => cy.get('.ant-notification-notice'),
      //titulos
     
      //elementos contenidos en un desplegable/ opciones
      opcionListas: (opcion) => cy.get('.ant-select-item-option-content').contains(opcion) ,
     
    };
  //H2

   irSolapaConsulta(){
      this.elements.solapaConsultaVendedores().click();
   }

   tipearDNI(dni){
      this.elements.campoDNI().type(dni);
   }
   
   clickBuscar(){
      this.elements.btnBuscar().click();
   }

   verificarTablaVendedores(entidad, descentidad){
      this.elements.tablaResultados().contains('tr', entidad).within(() => {
        cy.get('td').contains(entidad)
        cy.get('td').contains(descentidad)
      });
   }

   

  }
  module.exports = new consultaVendedores();

 
  