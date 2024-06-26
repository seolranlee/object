### # Chapter 02 객체지향 프로그래밍

- 책 읽을 때, 매우 크고 복잡한 시스템이라고 가정하고 읽기

#### # 01 영화 예매 시스템

- 별 내용 없음

#### # 02 객체지향 프로그래밍을 향해

- `객체` vs `클래스`

  - 대부분의 사람들은 클래스를 먼저 생각
  - 객체지향 -> 객체를 생각하는 것이 먼저
  - \*\* `클래스` = `객체들의 공통적인 부분`들을 모아둔 것임을 생각할 것

- 집중해야할 2가지

  - 객체를 클래스보다 우선시할 것
  - 객체를 `공동체의 일원으로 볼 것`
    - 독립적인 존재로 바라보지 말 것
    - `설계를 유연하고 확장가능하게 유도`함

- `도메인`

  - 정의
    - 문제를 해결하기 위해 `사용자가 프로그램을 사용하는 분야`
  - `클래스의 구조`는 `도메인의 구조와 유사해야 한다`

- \*\* 클래스의 `경계`

  - `클래스를 만들때나, 다른 클래스를 사용`해야 할때 `클래스의 경계(내부와 외부)를 구분`짓는 것이 중요
  - `변수 -> private`, `메서드 -> Public`
  - \*\* 클래스의 경계가 중요한 이유
    - 경계의 명확성이 `프로그래머에게 구현의 편리함, 자율성을 보장하기 때문`
  - 따라서 대부분의 객체지향 언어가 `접근 제어자` 개념을 제공

- 객체지향의 핵심

  - 객체는 `상태(state)`와 `행동(behavior)`을 포함하는 존재
    - 일반적으로 `상태(staet)는 숨기고`, `행동(behavior)은 공개`해야 함
  - \*\* 객체는 `자율적인 존재`
    - 외부의 간섭을 최소화해야함
    - `외부에서는 객체가 어떤 상태(state)인지, 어떤 과정으로 결론을 내리는지 알수 없어야 하고`, 해당 `객체가 올바른 결정을 내릴 것이라는 것을 믿어야` 한다.

- `프로그래머의 역할` 구별 (`구현 은닉`)

  - `클래스 작성자`, `클라이언트 프로그래머(클래스 사용자)`로 구별해서 생각해보면 도움이 됨
  - 해당 개념이 `인터페이스`와 `구현`을 명확하게 분리하는데 도움을 줌
  - 인터페이스와 구현이 명확하게 구별이 되면, 각 역할의 프로그래머는 각자의 부분에만 신경을 쓰면 된다
    - 클래스 작성자: 인터페이스 유지, `구현만 수정`
    - 플라이언트 프로그래머: 구현에 신경쓰지 않고, `인터페이스만 사용`

- `클래스로 더 명확히 의미 전달`하기

  - `돈`을 Long과 같은 `기본 숫자 타입 말고` `Money라는 구체적인 클래스로 정의`한 예시

- \*\* 객체들의 상호작용 -> `메시지의 송수신`

  - 객체들의 상호작용은 정의된 인터페이스를 바탕으로 `메시지를 주고 받는 것`에 비유될 수 있음
  - 요청을 하는 객체는, 요청을 받는 객체가 `'특정 메시지에 응답할 수 있다'`는 사실만 알고 있음
    - \*\* 이와 같은 개념에서 `다형성`의 개념이 출발

#### # 03 할인 요금 구하기

- \*\* 중요한 두 가지 개념

  - `상속`
  - `다형성`
  - 이 두가지 개념은 `추상화`가 기반이 됨

- `추상 클래스`

  - 할인 정책 예시
  - \*\* `추상 클래스`
    - `전체적인 흐름`만 제시
    - 나머지 `추가적인 처리`는 `자식 클래스에 위임`
  - `추상 메서드`
    - `자식 클래스에서 반드시` `재정의(오버라이딩)해야만 사용할 수 있는 메소드`
  - 추상 클래스는 `하나 이상의 추상 메서드를 가진 클래스`를 의미

- \*\* 생성자의 파라미터
  - `올바른 상태`를 가진 `객체의 생성을 보장(강제)하기 위함`

#### # 04 상속과 다형성

- \*\* `컴파일 타임` 의존성 vs `런 타임` 의존성

  - `의존성`이란
    - 한 클래스가 다른 클래스에 접근``할 수 있거나, 다른 클래스의 `객체의 메서드를 호출`할 때
  - `컴파일 타임 의존성`
    - `코드 수준`에서의 의존성
  - `런 타임 의존성`
    - `실행 시점`의 의존성
    - `실제 생성된 인스턴스`에 의존됨
  - \*\* `코드 수준의 의존성`과 실제 `실행 시점의 의존성`은 `다를 수 있다`
    - 이를 잘 인지해야 `트레이트 오프를 잘 조절할 수 있음`
    - a. 두 의존성이 비슷할 때
      - `코드를 이해`하기 쉬워진다
    - b. 두 의존성이 다를 때
      - `유연`하고 `확장 가능성`이 커진다

- \*\* `상속`

  - \*\* 상속이 가치있는 이유
    - 부모 클래스의 `모든 인터페이스를 자식 클래스가 물려받기 때문`
    - \*\* `단순히 인스턴스 변수, 메서드를 재사용하는 것이 아님`
      - 해당 개념으로 생각하면 `변경에 취약한 코드가 생산되기만 할 뿐`
    - \*\*\* 외부 객체에서 `자식 클래스를 부모 클래스와 동일한 타입으로 간주`할 수 있기 때문에 `동일한 메시지를 송수신` 할 수 있게 되는 다형성의 개념으로 생각해야 한다.

- \*\* 다형성

  - \*\* `동일한 메시지를 송신`하지만, 실제로 `어떤 메서드가 실행될 것인지는` `수신하는 객체에 따라 달라지는 것`
    - = `동일한 메시지를 수신했을때`, 객체의 `타입에 따라 다르게 응답할 수 있는 능력`
  - 결국엔 `인터페이스가 동일`해야 하는 전제가 깔려있음
  - 다형성을 구현하는 방법에는 다양한 것이 있고, 대표적인 것이 `상속`

- \*\* `구현 상속` vs `인터페이스 상속`
  - 구현 상속
    - `코드 재사용`을 위해 상속을 이용하는 것
  - 인터페이스 상속
    - `다형성`을 위해 상속을 이용하는 것

#### # 05 추상화와 유연성

- `추상화의 힘`

  - `세부적인 내용을 무시`한 채, `상위 개념의 정책으로 쉽고 간단하게 정의`할 수 있음
    - `디자인 패턴`, `프레임워크`도 추상화 덕분에 가능
  - `기존 구조를 수정하지 않고`, `쉽게 추가, 확장이 가능함`

- \*\* `책임`과 `조건문 관련`

  - 책임을 두기 위해 `조건문을 두는 것은 좋지않은 선택`
    - \*\* `일관성을 지키기 위해 상위 개념을 두고` `동일한 인터페이스로 동작`하게 해야함
    - 설계가 `구체적인 상황에 의존되지 않도록 하기`

- \*\* 모든 코드를 구현할 때 생각하고 하기

  - `사소한 결정을 하더라도` `트레이드 오프에 대한 고민을 하면서` 코드를 작성하자

- \*\* `합성`
  - `코드를 재사용`한다는 개념에서 `상속`과 `합성`은 완전히 `동일`
    - \*\* 하지만 `상속은 단점이 존재`
      - `캡슐화 위반`
        - `부모 클래스의 구현`이 `자식 클래스에게 노출`
      - `유연하지 못함`
        - 결국 `부모 클래스의 구현`이 `자식 클래스에게 영향`을 주는 구조이기 때문에, 부모-자식이 `강하게 결합`됨
  - 동작
    - \*\* 다른 객체를 `인스턴스 변수`로 두고, `실행 시점에 연결`되도록 설계
    - 결국 상속의 2가지 문제를 해결
      - 그래도 상속을 사용하지 말라는 것은 아님

#### # 느낀 점

- `캡슐화`에 대해 생각할 때, `외부 라이브러리를 사용할 때`를 생각해보니 이해가 갔다
  - (`캡슐화: state는 숨기고, behavior은 공개`)
- 동작이 구체적인 상황에 의존하지 않도록 하기
  - 객체지향으로 개발하려고는 안해도 평소에 지키려고는 하는데, 일하다 보면 지키기 어려운 순간이 많음
- 앞으로 상속을 사용할 때, 생각 자체를 다르게 해야겠다
  - `코드 재사용`을 위한 개념으로만 생각했는데, `다형성의 관점`으로 생각할 것
- `합성`에 대한 정의를 다시 정리했음
  - `클래스 등과 같이 컴파일 시점`에 의존성을 두는 것을 방지하게 위해서, `내부에 인스턴스 변수로 두고` `실행 시점에 의존성`을 두게 해서 `유연하게 하는 것`
