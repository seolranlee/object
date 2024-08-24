# 일관성 있는 협력

- 객체들의 협력 방식을 일관성 있게 만들어야 한다.
  - 유사한 기능을 구현하기 위해 유사한 협력 패턴을 사용하라.
- 다양한 설계 경험을 익히고 널리 알려진 디자인 패턴을 학습하고 변경이라는 문맥 안에서 디자인 패턴을 적용해보라.
  - 디자인 패턴은 특정한 변경에 대해 일관성 있는 설계를 만들 수 있는 경험 법칙을 모아놓은 일종의 설계 템플릿이다.

## 설계에 일관성 부여하기

1. 변하는 개념을 변하지 않는 개념으로부터 분리하라.
2. 변하는 개념을 캡슐화하라.

### 변하는 개념을 변하지 않는 개념으로부터 분리하기

- 타입을 체크하는 각 조건문을 개별적인 객체로 분리하고 이 객체들과 일관성 있게 협력하기 위해 타입 계층을 구성
- 타입 계층을 클라이언트부터 분리하기 위해 역할을 도입하고, 추상 클래스와 인터페이스로 역할을 구현
  - 변하는 개념을 별도의 서브타입으로 분리
  - 서브타입들을 클라이언트로부터 캡슐화

### 변하는 개념을 캡슐화하기

- 객체의 퍼블릭 인터페이스와 구현을 분리
  - 자주 변경되는 내부 구현을 안정적인 퍼블릭 인터페이스 뒤로 숨긴다.

1. 데이터 캡슐화
2. 메서드 캡슐화
3. 객체 캡슐화
4. 서브타입 캡슐화

### 객체 캡슐화와 서브타입 캡슐화

- 협력을 일관성 있게 만들기 위해 가장 일반적으로 사용하는 방법은 객체 캡슐화와 서브타입 캡슐화를 조합하는 것이다.
  - 서브타입 캡슐화는 인터페이스 상속을 사용한다.
  - 객체 캡슐화는 합성을 사용한다.

#### 조합 방법

- 변하는 부분을 분리해서 타입 계층을 만든다.
  - 변하는 부분들의 공통적인 행동을 추상 클래스나 인터페이스로 추상화한다.
  - 변하는 부분들을 추상 클래스나 인터페이스를 상속 받아 구현한다.

- 변하지 않는 부분의 일부로 타입 계층을 합성한다.
  - 의존성 주입과 같이 결합도를 느슨하게 유지할 수 있는 방법을 이용해 오직 추상화에만 의존하도록 만든다.
  - 예) Movie가 DiscountPolicy를 합성 관계로 연결하고 생성자를 통해 의존성을 해결

## 일관성 있는 기본 정책 구현하기

### 변경 분리하기

- 요구사항을 정리하여 변하는 개념과 변하지 않는 개념을 분리하기
  - 공통점은 변하지 않는 부분이다.
  - 차이점은 변하는 부분이다.

### 변경 캡슐화하기

- 변하지 않는 부분으로부터 변하는 부분을 분리하기
  - 변하는 부분의 공통점을 추상화
  - 변하지 않는 부분이 오직 이 추상화에만 의존하도록 관계를 제한

  1. 변하지 않는 클래스와 변하는 것을 분리하여 인터페이스로 추상화
  2. 변하는 것은 추상화의 서브타입으로 생성 (서브타입 캡슐화)
  3. 변하지 않는 클래스와 변하는 것을 추상화한 인터페이스를 합성 관계로 연결 (객체 캡슐화)

  예) 변하지 않는 것 '규칙 FeeRule', 변하는 것 '적용조건 FeeCondition'
  - FeeRule로 부터 FeeCondition을 분리하고, FeeCondition을 추상화한 인터페이스로 만들어서 FeeRule과 합성 관계로 연결하여 FeeCondition 인터페이스에만 의존하도록 만든다. FeeRule은 FeeCondition의 어떤 서브타입도 알지 못하고, FeeCondition의 서브타입은 FeeRule로부터 캡슐화된다.

### 협력 패턴 설계하기

- 객체들의 협력 방식을 고민
- 변하는 부분과 변하지 않는 부분을 분리(1)하고, 변하는 부분을 적절히 추상화(2)하고 나면 변하지 않는 부분만을 이용해 객체 사이의 협력 패턴을 설계할 수 있다.
- 변하지 않는 추상화만을 남기고 이 추상화들이 참여하는 협력은 메시지를 수신했을 때 시작된다.

### 추상화 수준에서 협력 패턴 구현하기

- 변하는 것을 캡슐화한 코드는 오로지 변하지 않는 것과 추상화에 대한 의존성만으로도 전체적인 협력을 구현할 수 있다.
- 변하는 것은 추상화 뒤에 캡슐화되어 숨겨져 있어 전체적인 협력의 구조에 영향을 미치지 않는다.
- [전략 패턴 (Strategy Pattern)](https://refactoring.guru/ko/design-patterns/strategy)

### 구체적인 협력 구현하기

- 협력이 동작하기 위해서 구체적이고 살아있는 컨텍스트로 확장
  - 예) FeeCondition 인터페이스를 구현하는 서브타입으로 생성

### 협력 패턴에 맞추기

- 개념적 무결성 (Conceptual Integrity)
  - 협력 패턴을 일관성 있게 만들기 위해 협력 패턴을 구현하는 방법을 통일
  - 예) 불필요한 FixedFeeCondition 클래스를 추가하고 오퍼레이션의 반환 타입이 List인데 항상 단 하나의 인스턴스를 반환함에도 불구하고 개념적 무결성을 무너뜨리지 않고 FeeCondition 인터페이스를 구현하는 서브타입으로 생성

## 패턴을 찾아라

- 협력의 핵심은 변경을 분리하고 캡슐화하는 것
- 애플리케이션에서 유사한 기능에 대한 변경이 지속적으로 발생하고 있다면 변경을 캡슐화할 수 있는 적절한 추상화를 찾은 후, 이 추상화에 변하지 않는 공통적인 책임을 할당하라.

## 정리

- 타입 계층을 잘 분리하여 추상화하는 것이 핵심!

### 전략 패턴

```typescript
// 변하지 않는 부분
class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    executeStrategy(data: number[]): number[] {
        return this.strategy.doAlgorithm(data);
    }
}

// 변하는 부분을 캡슐화한 인터페이스
interface Strategy {
    doAlgorithm(data: number[]): number[];
}

// 구체적인 전략들
class ConcreteStrategyA implements Strategy {
    doAlgorithm(data: number[]): number[] {
        return data.sort((a, b) => a - b);
    }
}

class ConcreteStrategyB implements Strategy {
    doAlgorithm(data: number[]): number[] {
        return data.sort((a, b) => b - a);
    }
}

// 클라이언트 코드
const data = [3, 1, 2, 5, 4];

const context = new Context(new ConcreteStrategyA());
console.log("Strategy A:", context.executeStrategy(data));

context.setStrategy(new ConcreteStrategyB());
console.log("Strategy B:", context.executeStrategy(data));

```
