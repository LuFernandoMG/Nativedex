import { useState } from 'react'
import { View, StyleSheet, TextInput, Text, Keyboard, Button } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'


export default function LoginForm() {
    const [error, setError] = useState(null);
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValues) => {
            const { username, password } = formValues

            if (username !== user.user || password !== user.pass) {
                setError(true)
            } else {
                setError(null)
                login(userDetails);
            }
        }
    })

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
        />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button
        title="Entrar"
        onPress={() => formik.handleSubmit()}
      />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error && 'El usuario o la contraseña no son correctos'}</Text>
    </View>
  )
}

function validationSchema() {
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("Te olvidaste de la contraseña")
    }
}

function initialValues() {
    return {
        username: "",
        password: ""
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20,
    }
})