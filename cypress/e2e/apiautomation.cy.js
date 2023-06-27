describe('Employee List API', () => {

    it.only('should retrieve the employee list with specific parameters and headers', () => {
    cy.request({
    method: 'GET',
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
    qs: {
        limit: 50,
        offset: 0,
        model: 'detailed',
        includeEmployees: 'onlyCurrent',
        sortField: 'employee.firstName',
        sortOrder: 'ASC'
    },  
    headers: {
        
      'Cookie': 'orangehrm=8fa1f8bbfd4a295402d60db5504eb0f1',
      'Host' :'opensource-demo.orangehrmlive.com',
      'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
      // Add any other headers you need
    },
    
  }).then((response) => {
    expect(response.status).to.eq(200);
    //expect(response.body).to.have.property('data');
    // Handle the response here
    // You can access the response body using response.body
    cy.log(response)
  });
 })
})

