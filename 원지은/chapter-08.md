# 의존성 관리하기

- 작고 응집도 높은 객체란 책임의 초점이 명확하고 한 가지 일만 잘 하는 객체를 의미한다.

## 변경과 의존성

- 의존성은 실행 시점과 구현 시점에 서로 다른 의미를 가진다.
- 의존성은 방향성을 가지며 항상 단반향이다.
- 설계와 관련된 대부분의 용어들은 변경과 관련이 있다.
  - 두 요소 사이의 의존성은 한 요소가 변경될 때 다른 요소도 변경될 수 있다는 것을 의미한다.

### 실행 시점 의존성

- 의존하는 객체가 정상적으로 동작하기 위해서는 실행 시에 의존 대상 객체가 반드시 존재해야 한다.

### 구현 시점 의존성

- 의존 대상 객체가 변경될 경우 의존하는 객체도 함께 변경된다.

### 런타임 의존성과 컴파일타임 의존성

#### 런타임 의존성

- 애플리케이션이 실행되는 시점에 객체 사이의 의존성이 형성되는 것을 의미한다.
- 객체지향 애플리케잉션에서 런타임의 주인공은 객체이다.

#### 컴파일타임 의존성

- 작성된 코드를 컴파일하는 시점에 객체 사이의 의존성이 형성되는 것을 의미한다.
- 동적 타입 언어의 경우에는 컴파일타임이 존재하지 않기 때문에 컴파일타임 의존성이라는 용어를 실제로 컴파일이 수행되는 시점으로 이해하면 의미가 모호해질 수 있다.
- 정적 타입 언어에서는 컴파일타임 의존성이 런타임 의존성과 동일하다.

### 컨텍스트 독립성

- 클래스가 특정한 문맥에 강하게 결합될수록 다른 문맥에서 사용하기 어려워진다.
- 설계가 유연해지기 위해서는 가능한 한 자신이 실행될 컨텍스트에 대한 구체적인 정보를 최대한 적게 알아야 한다.

## 유연한 설계

- 객체들이 협력을 위해 서로에 대해 알아야 하는 정보의 양을 최소화하는 것이 유연한 설계를 만드는 핵심이다.
- 의존성의 정도가 낮을수록 유연성이 높아진다.
  - 바람직한 의존성은 재사용성과 관련이 있다.
  - 바람직한 의존성은 컨텍스트에 독립적이다.


```
의존성 주입
- React Context API를 사용하면 컴포넌트가 Context에 의존성을 가지게 된다.
```