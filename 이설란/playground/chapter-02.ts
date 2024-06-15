// 유틸성 함수
// function getDayOfWeek(yyyyMMdd: Date) {
//   const dayOfWeek = new Date(yyyyMMdd).getDay();
//   //0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
//   return dayOfWeek;
// }

class Money {
  // static으로 정의된 필드나 메서드는 해당 클래스의 인스턴스화 없이 클래스 이름으로 직접 접근할 수 있습니다.
  // 따라서 Money.ZERO는 Money 클래스의 인스턴스화 없이 Money 클래스 자체에서 접근할 수 있는 정적 필드이므로 DiscountPolicy 클래스에서 Money.ZERO를 직접 참조할 수 있습니다.
  // 따라서 return Money.ZERO;와 같이 Money 클래스의 정적 필드를 직접 참조하는 것은 올바른 사용법입니다. 이를 통해 코드의 가독성을 높일 수 있고, 불필요한 인스턴스화를 피할 수 있습니다.
  static readonly ZERO: Money = Money.wons(0);

  private readonly amount: number;

  static wons(amount: number): Money {
    return new Money(amount);
  }

  constructor(amount: number) {
    this.amount = amount;
  }

  //  이론적으로 amount가 private로 선언되어 있더라도 동일한 클래스의 다른 인스턴스에서는 해당 필드에 접근할 수 있다.
  plus(amount: Money): Money {
    return new Money(this.amount + amount.amount);
  }

  minus(amount: Money): Money {
    return new Money(this.amount - amount.amount);
  }

  times(percent: number): Money {
    return new Money(this.amount * percent);
  }

  isLessThan(other: Money): boolean {
    return this.amount < other.amount;
  }

  isGreaterThanOrEqual(other: Money): boolean {
    return this.amount >= other.amount;
  }
}

class Reservation {
  // private customer: Customer;
  private screening: Screening;
  private fee: Money;
  private audienceCount: number;

  constructor(
    // customer: Customer,
    screening: Screening,
    fee: Money,
    audienceCount: number
  ) {
    // this.customer = customer;
    this.screening = screening;
    this.fee = fee;
    this.audienceCount = audienceCount;
  }
}

// 할인조건
interface DiscountCondition {
  isSatisfiedBy(screening: Screening): boolean;
}

// implements 키워드는 클래스가 인터페이스를 구현한다는 것을 나타내는 데 사용됩니다. 클래스가 인터페이스를 implements 키워드로 선언하면, 해당 클래스는 인터페이스에 정의된 모든 메서드를 구현해야 합니다.
// implements는 인터페이스를 구현하는 클래스를 선언할 때 사용되며, extends는 다른 클래스를 상속하는 클래스를 선언할 때 사용됩니다.
class SequenceCondition implements DiscountCondition {
  private sequence: number;

  constructor(sequence: number) {
    this.sequence = sequence;
  }

  isSatisfiedBy(screening: Screening): boolean {
    return screening.isSequence(this.sequence);
  }
}

class PeriodCondition implements DiscountCondition {
  private dayOfWeek: number;
  private startTime: Date;
  private endTime: Date;

  constructor(dayOfWeek: number, startTime: Date, endTime: Date) {
    this.dayOfWeek = dayOfWeek;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  isSatisfiedBy(screening: Screening): boolean {
    // return (
    //   getDayOfWeek(screening.getStartTime()) === this.dayOfWeek &&
    //   this.startTime.getTime() <= screening.getStartTime().getTime() &&
    //   this.endTime.getTime() >= screening.getStartTime().getTime()
    // );
    return true;
  }
}

// 할인정책
// 추상 클래스는 하나 이상의 추상 메서드를 포함할 수 있으며, 이러한 추상 메서드는 하위 클래스에서 반드시 구현해야 합니다. 
// 추상 클래스는 공통된 인터페이스를 정의하고, 이를 상속받는 클래스들이 반드시 구현해야 하는 메서드들을 명시할 수 있습니다.
abstract class DiscountPolicy {
  private conditions: DiscountCondition[];

  constructor(...conditions: DiscountCondition[]) {
    this.conditions = conditions;
  }

  calculateDiscountAmount(screening: Screening): Money {
    for (const condition of this.conditions) {
      if (condition.isSatisfiedBy(screening)) {
        return this.getDiscountAmount(screening);
      }
    }

    return Money.ZERO;
  }

  // protected 키워드는 해당 멤버(필드 또는 메서드)가 자식 클래스에서 접근 가능하도록 지정하는 접근 제어자입니다. 이는 상속 관계에서 중요한 역할을 합니다.
  // protected로 지정된 멤버는 그 멤버를 선언한 클래스와 해당 클래스를 상속받은 서브클래스에서 접근할 수 있습니다. 
  // 즉, 외부 클래스에서는 접근할 수 없지만, 해당 클래스를 상속한 클래스에서는 접근할 수 있습니다.
  protected abstract getDiscountAmount(screening: Screening): Money;
}

class AmountDiscountPolicy extends DiscountPolicy {
  private discountAmount: Money;

  constructor(discountAmount: Money, ...conditions: DiscountCondition[]) {
    // super 키워드는 자식 클래스에서 부모 클래스의 생성자를 호출하는 데 사용됩니다.
    // AmountDiscountPolicy 클래스의 생성자에서 super(...conditions)는 DiscountPolicy 클래스의 생성자를 호출하는 구문입니다. 이것은 AmountDiscountPolicy 클래스가 DiscountPolicy 클래스를 상속받았으므로, DiscountPolicy 클래스의 생성자를 호출하여 부모 클래스의 초기화를 수행합니다.
    // 이렇게 함으로써 AmountDiscountPolicy 클래스는 부모 클래스인 DiscountPolicy 클래스의 기능을 상속받으면서 동시에 자신만의 추가적인 기능을 구현할 수 있습니다.
    super(...conditions);
    this.discountAmount = discountAmount;
  }

  // TypeScript에서는 자바의 @Override와 유사한 기능을 제공하는 특별한 키워드는 없습니다.
  // 자바의 @Override는 메서드가 슈퍼 클래스에서 상속되었거나 인터페이스에서 정의되었음을 명시적으로 나타내는 어노테이션입니다. 이는 컴파일러에게 해당 메서드가 슈퍼 클래스나 인터페이스의 메서드를 오버라이딩하는 것임을 알려줍니다. 이렇게 함으로써 메서드 이름이나 시그니처 등의 변경으로 인한 오버라이딩 오류를 미연에 방지할 수 있습니다.
  // TypeScript에서는 이러한 명시적인 어노테이션 없이도 자동으로 오버라이딩이 이루어집니다. 따라서 TypeScript에서는 @Override와 같은 특별한 키워드를 사용할 필요가 없습니다. 만약 메서드를 오버라이딩하려면 슈퍼 클래스나 인터페이스에 선언된 메서드와 동일한 시그니처를 가진 메서드를 자식 클래스에서 정의하면 됩니다. TypeScript 컴파일러는 이를 자동으로 오버라이딩으로 처리합니다.
  protected getDiscountAmount(screening: Screening): Money {
    return this.discountAmount;
  }
}

class PercentDiscountPolicy extends DiscountPolicy {
  private percent: number;

  constructor(percent: number, ...conditions: DiscountCondition[]) {
    super(...conditions);
    this.percent = percent;
  }

  protected getDiscountAmount(screening: Screening): Money {
    return screening.getMovieFee().times(this.percent);
  }
}

class Movie {
  private title: string;
  private runningTime: number;
  private fee: Money;
  private discountPolicy: DiscountPolicy;

  constructor(
    title: string,
    runningTime: number,
    fee: Money,
    discountPolicy: DiscountPolicy
  ) {
    this.title = title;
    this.runningTime = runningTime;
    this.fee = fee;
    this.discountPolicy = discountPolicy;
  }

  getFee(): Money {
    return this.fee;
  }

  calculateMovieFee(screening: Screening) {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening)
    );
  }
}

class Screening {
  private movie: Movie;
  private sequence: number;
  private whenScreened: Date;

  constructor(movie: Movie, sequence: number, whenScreened: Date) {
    this.movie = movie;
    this.sequence = sequence;
    this.whenScreened = whenScreened;
  }

  getStartTime(): Date {
    return this.whenScreened;
  }

  isSequence(sequence: number): boolean {
    return this.sequence === sequence;
  }

  getMovieFee(): Money {
    return this.movie.getFee();
  }

  // reserve(customer: Customer, audienceCount: number): Reservation {
  //   return new Reservation(
  //     customer,
  //     this,
  //     this.calculateFee(audienceCount),
  //     audienceCount
  //   );
  // }

  reserve(audienceCount: number): Reservation {
    return new Reservation(
      this,
      this.calculateFee(audienceCount),
      audienceCount
    );
  }

  private calculateFee(audienceCount: number): Money {
    return this.movie.calculateMovieFee(this).times(audienceCount);
  }
}

const avatar = new Movie(
  "아바타",
  120,
  Money.wons(10000),
  new AmountDiscountPolicy(
    Money.wons(800),
    new SequenceCondition(1),
    new SequenceCondition(10)
  )
);

const screen1 = new Screening(avatar, 1, new Date());

console.log("screen1", screen1.reserve(1));

const screen2 = new Screening(avatar, 2, new Date());

console.log("screen2", screen2.reserve(2));
