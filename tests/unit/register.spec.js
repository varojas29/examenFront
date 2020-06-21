import { mount } from "@vue/test-utils"
import { expect } from "chai"
import Register from "@/components/Register"

describe('Register.vue', () => {
    // Given/Arrange
    const wrapper = mount(Register)
    let checkbox = wrapper.find('input[type="checkbox"]')
    let registerBtn = wrapper.find('button[type="submit"]')
    
    it('has a disabled button', () => {
        // When/Act
        checkbox.setChecked(false)
        // Then/Assert
        expect(registerBtn.classes('is-disabled')).to.be.true
    })
    it('has a button not disabled when checkbox is checked', () => {
        checkbox.setChecked(true)
        expect(registerBtn.classes('is-disabled')).to.be.false
    })
    it('registers a User', () => {
        //Montar el componente con los métodos de prueba (stubs)
        let isSent = false
        function stubMethod() {isSent = true}
        const wrapper = mount(Register, { 
            methods: {
                submitForm: stubMethod
            }
        })
        //Encontrar los campos necesarios
        let userName = wrapper.find('input[type="text"]')
        let email = wrapper.find('input[type="email"]')
        let password = wrapper.find('input[type="password"]')
        let registerBtn = wrapper.find('button[type="submit"]')
        //Asignar los valores a los campos
        userName.setValue('Baltazar Bratt')
        email.setValue('bbratt@hollywood.com')
        password.setValue('DanceFight')
        //Enviar el formulario
        registerBtn.trigger('click')
        //Probar que se envió el registro
        expect(isSent).to.be.true
    })

})