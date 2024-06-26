# Chapter 04 설계 품질과 트레이드오프

- 객체지향 설계의 핵심은 **역할**, **책임**, **협력**이다.
  - **협력**은 애플리케이션의 기능을 구현하기 위해 메시지를 주고 받는 객체들 사이의 상호작용이다.
  - **책임**은 객체가 다른 객체와 협력하기 위해 수행하는 행동이고
  - **역할**은 대체 가능한 책임의 집합이다.
- 객체지향 설계란 **올바른 객체에게 올바른 책임을 할당하면서 낮은 결합도와 높은 응집도를 가진 구조를 창조하는 활동**이다.
- 훌륭한 설계란 **합리적인 비용 안에서 변경을 수용할 수 있는 구조를 만드는 것**이다.
  - 적절한 비용 안에서 쉽게 변경할 수 있는 설계는 응집도가 높고 서로 느슨하게 결합돼 있는 요소로 구성된다.

## 데이터 중심의 영화 예매 시스템

- 객체지향 설계에서는 두 가지 방법을 이용해 시스템을 객체로 분할할 수 있다.
  - 첫 번째 방법은 상태를 분할의 중심축으로 삼는 방법
  - 두 번째 장법은 책임을 분할의 중심축으로 삼는 방법
- 시스템을 분할하기 위해 데이터와 책임 중 어떤 것을 선택해야 할까?
  - 훌륭한 객체지향 설계는 데이터가 아니라 책임에 초점을 맞춰야 한다.
  - 상태를 객체 분할의 중심축으로 삼으면 구현에 관한 세부사항이 객체의 인터페이스에 스며들게 되어 캡슐화의 원칙이 무너진다.
  - 데이터에 초점을 맞추는 설계는 변경에 취약할 수밖에 없다.
- 객체는 책임을 드러내는 안정적인 인터페이스 뒤로 책임을 수행하는 데 필요한 상태를 캡슐화함으로써 구현 변경에 대한 파장이 외부로 퍼져나가는 것을 방지한다.
  - 따라서, 책임에 초점을 맞추면 상대적으로 변경에 안정적인 설계를 얻을 수 있게 된다.

### 데이터를 준비하자

- 데이터 중심의 설계란 객체 내부에 저장되는 데이터를 기반으로 시스템을 분할하는 방법이다.
- 데이터 중심의 설계에서는 객체가 포함해야 하는 데이터에 집중한다.
  - 이 객체가 포함해야 하는 데이터는 무엇인가?
  - 객체의 책임을 결정하기 전에 이런 질문의 반복에 휩쓸려 있다면 데이터 중심의 설계에 매몰돼 있을 확률이 높다.

## 설계 트레이드오프

### 캡슐화

- 상태와 행동을 하나의 객체 안에 모으는 이유는 객체의 내부 구현을 외부로부터 감추기 위해서다.
  - 여기서 구현이란 나중에 변경될 가능성이 높은 어떤 것을 가리킨다.
  - 객체지향이 강력한 이유는 한 곳에서 일어난 변경이 전체 시스템에 영향을 끼치지 않도록 파급효과를 적절하게 조절할 수 있는 장치를 제공하기 때문이다.
- 변경될 가능성이 높은 부분을 **구현**이라고 부르고 상대적으로 안정적인 부분을 **인터페이스**라고 부른다는 사실을 기억하라.
  - 객체를 설계하기 위한 가장 기본적인 아이디어는 **변경의 정도에 따라 구현과 인터페이스를 분리하고 외부에서는 인터페이스에만 의존하도록 관계를 조절하는 것**이다.
- 객체지향 설계의 가장 중요한 원리는 **불안정한 구현 세부사항을 안정적인 인터페이스 뒤로 캡슐화하는 것**이다.

  > “훌륭한 프로그래밍 기술을 적용해서 캡슐화를 향상시킬 수는 있겠지만 객체지향 프로그래밍을 통해 전반적으로 얻을 수 있는 장점은 오직 설계 과정 동안 캡슐화를 목표로 인식할 때만 달성될 수 있다.

  - 객체 내부에 무엇을 캡슐화해야 하는가? 변경될 수 있는 어떤 것이라도 캡슐화해야 한다. 이것이 바로 객체지향 설계의 핵심이다.

  > “유지보수성이 목표다. 여기서 유지보수성이란 두려움 없이, 주저함 없이, 저항감 없이 코드를 변경할 수 있는 능력을 말한다.”

### 응집도와 결합도

- **응집도**는 모듈에 포함된 내부 요소들이 연관돼 있는 정도를 나타낸다.
  - 모듈 내의 요소들이 하나의 목적을 위해 긴밀하게 협력한다면 그 모듈은 높은 응집도를 가진다.
  - 모듈 내의 요소들이 서로 다른 목적을 추구한다면 그 모듈은 낮은 응집도를 가진다.
  - 객체지향의 관점에서 응집도는 **객체 또는 클래스에 얼마나 관련 높은 책임들을 할당했는지를 나타낸다.**
- **결합도**는 의존성의 정도를 나타내며 다른 모듈에 대해 얼마나 많은 지식을 갖고 있는지를 나타내는 척도다.
  - 어떤 모듈이 다른 모듈에 대해 너무 자세한 부분까지 알고 있다면 두 모듈은 높은 결합도를 가진다.
  - 어떤 모듈이 다른 모듈에 대해 꼭 필요한 지식만 알고 있다면 두 모듈은 낮은 결합도를 가진다.
  - 객체지향의 관점에서 결합도는 **객체 또는 클래스가 협력에 필요한 적절한 수준의 관계만을 유지하고 있는지를 나타낸다.**
- 높은 응집도와 낮은 결합도를 가진 설계를 추구해야 하는 이유는 단 한가지다. 그것이 설계를 변경하기 쉽게 만들기 때문이다.
- 변경의 관점에서 응집도란 **변경이 발생할 때 모듈 내부에서 발생하는 변경의 정도**로 측정할 수 있다.
  - 응집도가 높을수록 변경의 대상과 범위가 명확해지기 때문에 코드를 변경하기 쉬워진다.
- 변경의 관점에서 결합도는 한 모듈이 변경되기 위해서 다른 모듈의 변경을 요구하는 정도로 측정할 수 있다.
- 응집도와 결합도는 변경과 관련이 깊다.
  - 어떤 설계를 쉽게 변경할 수 있다면 높은 응집도를 가진 요소들로 구성돼 있고 요소들 사이의 결합도가 낮을 확률이 높다.
  - 응집도와 결합도를 변경의 관점에서 바라보는 것은 설계에 대한 시각을 크게 변화시킬 것이다.
- 캡슐화의 정도가 응집도와 결합도에 영향을 미친다.
  - 캡슐화를 지키면 모듈 안의 응집도는 높아지고 모듈 사이의 결합도는 낮아진다.
  - 캡슐화를 위반하면 모듈 안의 응집도는 낮아지고 모듈 사이의 결합도는 높아진다.

## 데이터 중심의 영화 예매 시스템의 문제점

- 데이터 중심의 설계는 캡슐화를 위반하고 객체의 내부 구현을 인터페이스의 일부로 만든다.
  - 반면 책임 중심의 설계는 객체의 내부 구현을 안정적인 인터페이스 뒤로 캡슐화한다.
- 데이터 중심의 설계가 가진 대표적인 문제점은 다음과 같다.
  - 캡슐화 위반
  - 높은 결합도
  - 낮은 응집도

### 캡슐화 위반

- 메서드를 통해서만 객체의 내부 상태에 접근할 수 있게 만들었다고 해서 캡슐화의 원칙을 지키고 있는 건 아니다.
  - 접근자와 수정자 메서드는 객체 내부의 상태에 대한 어떤 정보도 캡슐화하지 못한다.
- 설계할 때 협력에 관해 고민하지 않으면 캡슐화를 위반하는 과도한 접근자와 수정자를 가지게 되는 경향이 있다.
  - 객체가 사용될 문맥을 추측할 수밖에 없는 개발자는 어떤 상황에서도 해당 객체가 사용될 수 있게 최대한 많은 접근자 메서드를 추가하게 되는 것이다.

### 높은 결합도

- 객체 내부의 구현이 객체의 인터페이스에 드러난다는 것은 클라이언트가 구현에 강하게 결합되는 것을 의미한다.
  - 이는 단지 객체의 내부 구현을 변경했음에도 이 인터페이스에 의존하는 모든 클라이언트들도 함께 변경해야 한다는 것이다.
- 결합도 측면에서 데이터 중심 설계가 가지는 또 다른 단점은 여러 데이터 객체들을 사용하는 제어 로직이 특정 객체 안에 집중되기 때문에 하나의 제어 객체가 다수의 데이터 객체에 강하게 결합된다는 것이다.

**데이터 중심의 설계는 전체 시스템을 하나의 거대한 의존성 덩어리로 만들어 버리기 때문에 어떤 변경이라도 일단 발생하고 나면 시스템 전체가 요동칠 수밖에 없다.**

### 낮은 응집도

- 서로 다른 이유로 변경되는 코드가 하나의 모듈 안에 공존할 때 모듈의 응집도가 낮다고 한다.
  - 따라서 각 모듈의 응집도를 살펴보기 위해서는 코드를 수정하는 이유가 무엇인지 살펴봐야 한다.
- 하나의 요구사항 변경을 반영하기 위해 동시에 여러 모듈을 수정해야 한다.
  - 응집도가 낮을 경우 다른 모듈에 위치해야 할 책임의 일부가 엉뚱한 곳에 위치하게 되기 때문이다.
  - 어떤 요구사항 변경을 수용하기 위해 하나 이상의 클래스를 수정해야 하는 것은 설계의 응집도가 낮다는 증거다.

> **단일 책임 원칙 (SRP)**
>
> 단일 책임 원칙을 한마디로 요약하면 클래스는 단 한 가지의 변경 이유만 가져야 한다는 것이다.
>
> 한 가지 주의할 점은 단일 책임 원칙이라는 맥락에서 `책임`이라는 말이 `변경의 이유`라는 의미로 사용된다는 점이다. 단일 책임 원칙에서의 책임은 지금까지 살펴본 역할, 책임, 협력에서 이야기하는 책임과는 다르며 변경과 관련된 더 큰 개념을 가리킨다.

## 자율적인 객체를 향해

### 캡슐화를 지켜라

- 객체는 자신이 어떤 데이터를 가지고 있는지를 내부에 캡슐화하고 외부에 공개해서는 안된다.
  - 객체는 스스로의 상태를 책임져야 하며 외부에서는 인터페이스에 정의된 메서드를 통해서만 상태에 접근할 수 있어야 한다.
- 객체에게 의미 있는 메서드는 객체가 책임져야 하는 무언가를 수행하는 메서드다.
  - 속성의 가시성을 private으로 설정했다고 해도 접근자와 수정자를 통해 속성을 외부로 제공하고 있다면 캡슐화를 위반하는 것이다.

### 스스로 자신의 데이터를 책임지는 객체

- 우리가 상태와 행동을 객체라는 하나의 단위로 묶는 이유는 객체 스스로 자신의 상태를 처리할 수 있게 하기 위해서다.
  - 객체는 단순한 데이터 제공자가 아니다.
  - 객체 내부에 저장되는 데이터보다 객체가 협력에 참여하면서 수행할 책임을 정의하는 오퍼레이션이 더 중요하다.
- 객체를 설계할 때 “이 객체가 어떤 데이터를 포함해야 하는가?”라는 질문은 다음과 같은 두 개의 개별적인 질문으로 분리해야 한다.
  - "**이 객체가 어떤 데이터를 포함해야 하는가?**"
  - "**이 객체가 데이터에 대해 수행해야 하는 오퍼레이션은 무엇인가?**"
  - 두 질문을 조합하면 객체의 내부 상태를 저장하는 방식과 저장된 상태에 대해 호출할 수 있는 오퍼레이션의 집합을 얻을 수 있다.
  - 다시 말해, **새로운 데이터 타입을 만들 수 있는 것**이다.

데이터를 처리하는 데 필요한 메서드를 데이터를 가지고 있는 개체 스스로 구현하고 있다.  
따라서 이 객체들은 스스로를 책임진다고 말할 수 있다.

## 하지만 여전히 부족하다

### 캡슐화 위반

- 파라미터를 통해 받는 정보들에 인스턴스 변수가 포함되어 있다.
  - 이는 어떤 인스턴스 변수가 포함돼 있다는 사실을 인터페이스를 통해 외부에 노출하고 있는 것이다.
  - 후에 속성을 변경해야 한다면 메서드의 파라미터를 수정하고 해당 메서드를 사용하는 모든 클라이언트도 함께 수정해야 할 것이다.
- 내부 구현의 변경이 외부로 퍼져나가는 파급 효과는 캡슐화가 부족하다는 명백한 증거다.

> **캡슐화의 진정한 의미**
>
> 이 예제는 캡슐화가 단순히 객체 내부의 데이터를 외부로부터 감추는 것 이상의 의미를 가진다는 것을 잘 보여준다. 사실 캡슐화는 변경될 수 있는 어떤 것이라도 감추는 것을 의미한다.
>
> 다시 한번 강조하지만 캡슐화란 변할 수 있는 어떤 것이라도 감추는 것이다. 어떤 종류건 상관없이 내부 구현의 변경으로 인해 외부의 객체가 영향을 받는다면 캡슐화를 위반한 것이다. 이것이 캡슐화라는 용어를 통해 말하고자 하는 진정한 의미다.
>
> **정리하면 캡슐화란 변하는 어떤 것이든 감추는 것이다. 그것이 무엇이든 구현과 관련된 것이라면 말이다.**

### 높은 결합도

- 두 객체 사이에 결합도가 높을 경우 한 객체의 구현을 변경할 때 다른 객체에게 변경의 영향이 전파될 확률이 높아진다는 사실을 기억하라.
- 다시 한번 강조하조 하지만 유연한 설계를 창조하기 위해서는 캡슐화를 설계의 첫 번째 목표로 삼아야 한다.

### 낮은 응집도

- 하나의 변경을 수용하기 위해 코드의 여러 곳을 동시에 변경해야 한다는 것은 설계의 응집도가 낮다는 증거다.
  - 응집도가 낮은 이유는 캡슐화를 위반했기 때문이다.

## 데이터 중심 설계의 문제점

- 캡슐화를 위반한 설계를 구성하는 요소들이 높은 응집도와 낮은 결합도를 가질 확률은 극히 낮다.
  - 따라서 캡슐화를 위반한 설계는 변경에 취약할 수밖에 없다.
- 데이터 중심의 설계가 변경에 취약한 이유는 두 가지다.
  - 데이터 중심의 설계는 본질적으로 너무 이른 시기에 데이터에 관해 결정하도록 강요한다.
  - 데이터 중심의 설계에서는 협력이라는 문맥을 고려하지 않고 객체를 고립시킨 채 오퍼레이션을 결정한다.

### 데이터 중심 설계는 객체의 행동보다는 상태에 초점을 맞춘다.

- 데이터는 구현의 일부라는 사실을 명심하라.
  - 데이터 주도 설계는 설계를 시작하는 처음부터 데이터에 관해 결정하도록 강요하기 때문에 너무 이른 시기에 내부 구현에 초점을 맞추게 한다.
- 데이터를 먼저 결정하고 데이터를 처리하는 데 필요한 오퍼레이션을 나중에 결정하는 방식은 데이터에 관한 지식이 객체의 인터페이스에 고스란히 드러나게 된다.
  - 결과적으로 객체의 인터페이스는 구현을 캡슐화하는 데 실패하고 코드는 변경에 취약해진다.

**결론적으로 데이터 중심의 설계는 너무 이른 시기에 데이터에 대해 고민하기 때문에 캡슐화에 실패하게 된다.**

**객체의 내부 구현이 객체의 인터페이스를 어지럽히고 객체의 응집도와 결합도에 나쁜 영향을 미치기 때문에 변경에 취약한 코드를 낳게 된다.**

### 데이터 중심 설계는 객체를 고립시킨 채 오퍼레이션을 정의하도록 만든다.

- 올바른 객체지향 설계의 무게 중심은 항상 객체의 내부가 아니라 외부에 맞춰져 있어야 한다.
  - 중요한 것은 객체가 다른 객체와 협력하는 방법이다.

## 4장을 마치며

- 최근에 ts-jenum이라는 라이브러리를 이용하여 EnumClass를 만들어서 사용해보고 있어서 그런지 4장에서 나오는 이야기들을 기반으로 내가 작성한 코드를 다시 들여다 보고 수정해 나가는 과정이 상당히 재밌었다.
  - 인터페이스에 내부 구현을 드러내지 않는 코드라던가 응집도가 높은 코드를 만들어 볼 수 있었달까
  - [ts-jenum 으로 응집력 있는 TS 코드 작성하기 (feat. EnumClass)](https://jojoldu.tistory.com/621)
  - [Java Enum 활용기](https://techblog.woowahan.com/2527/)
