import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Form, Text, Button } from 'native-base';

export default class LoginForm extends Component {
  render() {
    return(
      <Container>
        <Content>
          <Form>
            <View>
              <input
                placeholder='username'
                />
            </View>
          </Form>
          <Button>
            <Text>
              Hello World
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
