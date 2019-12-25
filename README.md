# Chapter 2

- 데이터와 기능을 객체 내부로 함께 묶는 것을 캡슐화라 한다.
- 프로그래머의 역할을 클래스 작성자(Creator)와 클라이언트 프로그래머 -> 클래스 소비자(?) 로 구분하는 것이 유용하다. - 클래스를 개발할때마다 인터페이스와 구현을 깔끔하게 분리하기 위해 노력해야 한다.

### 협력

- 객체간에는 메시지를 전송하는 것뿐
- 수신된 메시지를 처리하는 자신만의 방법을 메서드라 부른다.
- 메시지 / 메서드의 구분
- _메시지 전송 / 수신은 public 메서드를 호출하는 것으로 표현_
- - 메시지와 메서드를 구분하자!
- 부모 클래스에 기본적인 알고리즘의 흐름을 구현하고, 중간에 필요한 처리를 자식클래스에게 위임하는 디자인 패턴을 TEMPLATe METHODS 패턴이라 한다

### 상속과 다형성

- 코드의 의존성과 실행시점의 의존성은 다를 수 있다 - 코드는 추상클래스에 의존하고, 실행시점에는 구현체에 의존하도록 유연한 구조 - 코드와 실행시점 의존성이 다르면 코드를 이해하기 어려워지나, 유연성을 얻을수 있는 트레이드 오프 관계. - 유연성 vs 가독성
- 차이에 의한 프로그래밍 - 공통된 부분을 상속받아 다른부분만 작성한다. - 상속은 두 클래스간의 관계를 정의하는 방법이다. - 자식클래스가 부모클래스를 대신하는 것을 UpCasting 이라 한다. - 자식클래스가 부모 클래스 타입으로 변환되는 Up-Casting
- 다형성 - **메시지와 메서드는 다르다!** - 상속 - 컴파일 시간 의존성과 실행시간 의존성을 다르게 만들 수 있는 객체지향 특성을 이용해 서로다른 메서드를 실행할 수 있게 한다. - 다형성? : 동일한 메시지를 수신했을 때 객체의 타입에 따라 다르게 응답할 수 있는 능력. 다형적인 협력에 참여하는 객체들은 모두 같은 메시지를 이해할 수 있어야 한다 --> Interface가 동일해야 한다. - 인터페이스 통일을 위해.. 상속을 사용 (`DiscountPolicy`) - `Lazy` or `Dynamic` Binding - 다형성은 상속이외에 다른 여러가지 방법으로 구현이 가능하다. - 인터페이스 - `isSatisfy`를 실체화(`implementation`) 하여 구현 - 이 경우에도 업캐스팅이 적용되며, 협력은 다형적이다!
- 추상화와 유연성 - 추상화 계층만 들여다보면 요구사항을 높은 수준에서 서술이 가능해진다 - 추상화를 이용하면 설계가 유연해진다 - 설계가 구체적인 상황에 결합되는것을 방지해 준다! - **Context Independency!** - 유연성이 필요한 곳에 추상화를 사용하라!
- 추상클래스 vs 인터페이스 Trade-off
- 코드재사용 - 상속 - 캡슐화를 위반한다. : 자식클래스는 부모클래스를 잘 알아야 하고, 강결합 된다. - 관계가 컴파일 시점에 결정되므로 실행시점에 객체를 변경하는게 불가능하다. - 인스턴스 변수로 연결되어 있으면, 실행시점에 인스턴스 변경이 가능하다! - 합성 (Composition) - 인터페이스에 정의된 메시지를 통해서만 코드를 재사용한다. -> 합성 - 합성은 상속의 두가지 문제점을 모두 해결한다. 1. 인터페이스에 정의된 메시지로만 재사용이 가능하므로, 구현을 효과적으로 캡슐화 할 수 있다. 2. 의존하는 인스턴스를 교체하기 쉬우므로 설계를 유연하게 만든다. - 코드 재사용을 위해서는 합성보다 상속을 선호하기도 한다.

# Chap3 역할, 책임 협력

## 협력

1. 객체를 자율적으로 만드는 가장 기본적인 방법은 내부 구현을 캡슐화 하는것이다.
   - 캡슐화를 통해 변경에 대한 파급효과를 제한할 수 있다.
   - 때문에, 자율적인 객체는 변경하기 쉬워진다.
2. 객체들 사이의 협력을 구성하는 일련의 요청과 응답의 흐름을 통해 기능이 구현된다.
3. 객체의 행동을 결정하는 것은 협력이다.
4. 객체의 상태를 결정하는 것은 행동이다.
5. 협력 -> 행동 -> 상태 (?)
6. 협력은 객체를 설계하는데 필요한 문맥을 제공한다.

## 책임

- 책임은 객체에 의해 정의되는 응집도 있는 행위의 집합
- 객체의 책임은 무엇을 알고 있는가(knowing)와, 무엇을 할수 있는가(doing)로 구성되어 있다 - 하는것 (Doing) - 객체를 생성하거나 계산을 수행하는 등의 스스로 하는 것 - 다른 객체의 행동을 시작시키는 것 - 다른 객체의 활동을 제어하고 조작하는 것 - 아는것(Knowing) - 사적인 정보에 관해 아는 것 - 관련된 객체에 관해 아는 것 - 자신이 유도(Derive/ Computed)하거나 계산할 수 있는 것에 대해 아는것
- 객체지향 개발에서 가장 중요한 능력은 **책임**을 능숙하게 **객체**에 할당하는 것
- 적절한 협력 -> 적절한 책임 -> 적절한 객체에 제공
- CRC(Candidate, Responsibility, Collaborator) Card

### 책임할당

- 객체지향 설계는 책임을 완료하는데 필요한 더 작은 책임을 찾아내고 이를 객체들에게 할당하는 반복적인 과정을 통해 모양을 갖춰 나간다.
- 책임주도설계 - 시스템이 사용자에게 제공해야 하는 기능인 시스템 책임을 파악한다. - 시스템 책임을 더 작은 책임으로 분할한다 - 분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당한다. - 객체가 책임을 수행하는 도중 다른 객체의 도움이 필요한 경우 이를 책임질 적절한 객체 또는 역할을 찾는다 - 해당 객체 또는 역할에게 책임을 할당함으로 두 객체가 협력하게 된다.

### 메시지가 객체를 결정한다

- 메시지를 먼저 식별하고 메시지를 처리할 객체를 나중에 선택한다.
- 객체가 최소한의 인터페이스를 가질 수 있게 된다.
- 객체는 충분히 추상적인 인터페이스를 가질 수 있게 된다.

### 행동이 상태를 결정한다

- 객체는 다른객체에게 제공하는 행동에 의해 결정된다.
- 객체의 상태가 아니라 행동에 초점을 맞춰야 한다!!!
- 협력이라는 문맥 안에서 객체를 생각해야 한다.
- 상태는 객체가 행동을 정상적으로 수행하기 위해 필요한 재료일 뿐이다.

## 역할

### 역할과 협력

- 익명의 역할을 찾고, 수행가능한 객체를 선택하는 방식으로 설계를 진행함.

### 유연하고 재사용 가능한 협력

- 역할을 통해 유연하고 재사용 가능한 협력을 얻을 수 있다.
- 역할은 두 종류의 구체적인 객체를 포괄하는 **추상화** 이다.
- 역할을 이용하면 불필요한 중복코드를 제거할 수 있다. + 협력이 더 유연해졌다.
- 역할의 구현 : 추상클래스 / 인터페이스 - 추상클래스 : 책임의 일부를 구현 - 인터페이스 : 책임의 집합만을 나열

### 객체 VS 역할

- 책임을 수행하는 대상이 한종류이면 객체
- 여러종류의 객체들이 참여할 수 있으면 역할
- 협력 -reference-> 역할 -select from-> 객체 -instance of-> 클래스
- 중요한 것은 책임이다.

### 역할과 추상화

### 배우와 배역

# Chap4 설계품질과 트레이드오프

## 데이터 중심의 영화예매 시스템

- 객체지향 설계에서는 '상태'(=데이터)를 분할의 중심으로 삼거나 - 데이터를 조작하는데 필요한 오퍼레이션을 정의 - 객체의 상태에 초점 - 객체는 독립된 데이터 덩어리
- '책임'을 분할의 중심축으로 삼는 방법이 있다. - 다른 객체가 요청할 수 있는 오퍼레이션 처리를 위한 상태를 보관. - 객체의 행동에 초점 - 객체는 협력하는 공동체의 일원

### 데이터를 중심으로 하는 영화예매 시스템

#### 캡슐화 : 변경가능성이 높은 부분을 내부로 숨기는 추상화 기법.

- 변경의 여파를 조절할 수 있다. (내부를 감춘다)
- 변경이 잦으면 (내부) 구현, 안정되면 인터페이스
- 캡슐화의 정도가 객체의 응집도와 결합도를 결정한다.

#### 응집도와 결합도 : 변경과 관련이 있다.

- 응집도 (High Cohesion) - 모듈내의 요소들이 하나의 목적을 위해 긴밀히 협력하면 높은 응집도 - 변경의 관점에서 : 변경이 발생할 때 모듈 내부에서 발생하는 변경의 정도. - 하나의 변경에 대해 하나의 모듈만 변경되면 응집도가 높음. (좋은것) - 응집도가 높으면 변경의 대상과 범위가 명확해져서 변경이 쉬워짐.
- 결합도 (Low Coupling) - 다른 모듈에 대해 얼마나 많이 알고 있는지 - 변경의 관점에서, 한모듈이 변경되기 위해 다른 모듈의 변경을 요구하는 정도.

### 데이터 중심 영화 예매 시스템의 문제

- 데이터 중심의 설계는 캡슐화를 위반하기 쉽다.
- 캡슐화 위반 - 객체가 다양한 상황에서 사용될 수 있을거라는 막연한 추측을 기반으로 설계를 하게되면 과도한 내부구현을 노출하는 메소드를 추가할 수 밖에 없다.
- 높은 결합도 - get methods의 노출은 결국 그 인스턴스 변수를 노출시키는 꼴이 된다. - 여러 데이터 객체를 사용하는 제어로직이 특정 객체안에 집중되기 때문에, 하나의 제어 객체가 다수의 데이터 객체에 강하게 결합이된다. - `ReservationAgency`에 모든 의존성이 모이게 된다. (`CommonView.ts`) - 시스템 안의 어떠한 변경되 `ReservationAgency`의 변경을 유발하게 된다.
- 낮은 응집도 - 여러가지 다른 목적의 로직이 하나의 모듈안에 있을때 낮은 응집도. - 하나를 고치면 다른쪽 코드에도 영향이 가게된다. - 변경시 여러 코드를 동시에 고쳐야 한다. - `Single Responsibility Principle`

### 자율적인 객체를 향해

- 캡슐화를 지켜라 - 캡슐화는 설계의 제1원리이다. - 높은 응집도와 낮은 결합도가 필요.
- `Rectangle` 의 너비와 높이를 증가시키는 코드는, `Rectangle`안에 두어서 `책임`을 이동시킨다. 이것이 바로 객체가 자기 스스로 책임진다는 말의 의미이다.
- 스스로 자신의 데이터를 책임지는 객체

### 캡슐화 위반

- 캡슐화는 변하는 어떤 것이든 감추는 것이다.

### 높은 결합도

- `DiscountCondition` - `Movie` 간에 결합도가 높다.

### 낮은 응집도

- 할인조건이 변경되면, `DiscountCondition`, `Movie`, `Screening`을 함께 변경해야 한다.

## 데이터중심 설계의 문제점!

- 데이터에 대한 결정 강요 -> 내부구현에 초점을 맞추게 됨.
- 올바른 객체지향 설계의 무게중심은 객체의 외부에 맞춰져야 한다.

# Chapter 5 : 책임 할당하기

- 책임에 초점을 맞춰 설계 -> 어떤객체에게 어떤 책임을 할당할것인가?
- `GRASP` 패턴을 알아보자

## 책임주도 설계를 향해

### 객체는 데이터보다 행동을 먼저 결정하라

- 객체는 데이터보다, 외부에 제공하는 행동이 중요하다.
- 객체에게 어떤 책임을 할당해야 하는가? `협력`에서 실마리를 찾을 수 있다.

### 협력이라는 문맥 안에서 책임을 결정하라

- 책임은 객체가 참여하는 협력에 적합해야 한다.
- 메시지를 전송하는 클라이언트의 의도에 적합한 책임을 할당해야 한다.
- 메시지를 결정한 후에 객체를 선택해야 한다.
- `메시지를 누구에게 전송할 것인가?`
- 메시지를 전송하기 때문에 객체를 갖게된 것이다.

### 책임주도 설계

1. 시스템 책임을 파악한다
2. 더 작은 책임으로 분할한다
3. 분할된 책임을 수행할 수 있는 적절한 객체 또는 역할을 찾아 책임을 할당한다.
4. 객체가 책임을 수행하는 도중 다른 객체의 도움이 필요한 경우 이를 책임질 적절한 객체 또는 역할을 찾는다.
5. 해당 객체 또는 역할에게 책임을 할당함으로써 두 객체가 협력하게 한다.

## 책임 할당을 위한 `GRASP` 패턴

### General Responsibility Assignment Software Pattern (일반적인 책임 할당을 위한 소프트웨어 패턴)

#### Information Expert Pattern : 정보전문가 에게 책임을 할당하라

- 메시지를 전송할 객체는 무엇을 원하는가? - `예매하라`
- 메시지를 수신할 적합한 객체는 누구인가? - 책임을 수행할 정보를 잘 알고 있는 객체에게 책임을 할당한다. - 책임을 수행하는데 필요한 정보를 가지고 있는 객체에게 할당하라. 그래야 책임을 어떻게 수행할지를 스스로 결정할 수 있기 때문이다.
- `예매하라` --> `Screening`
- `가격을 계산하라` --> 영화가격을 계산하는 데 필요한 정보를 가장 잘 아는 `Movie` 가 메시지를 수신한다.
- `Movie` --> `할인여부를 판단` -> `DiscountCondition` 에게 할당
- *객체지향의 가장 기본 원리*를 책임할당 관점에서 표현.

### 높은 응집도(Cohesion)과 낮은 결합도(Coupling)

- 설계는 트레이드오프 (Trade-off) 활동이다.

#### Low Coupling Pattern

- 책임할당을 설계할때 낮은 결합도를 유지할 수 있는 설계를 선택하라

#### High Cohesion Pattern

#### Creator Pattern

- B가 A객체를 포함하거나 참조한다.
- B가 A객체를 기록한다
- B가 A객체를 긴밀하게 사용한다
- B가 A객체를 초기화 하는데 필요한 데이터를 가지고 있다 (B는 A에 대한 정보전문가이다.)
- `Reservation`을 잘 알고 있는 객체는 `Screening`이다.
- 어떤 객체를 `Creator`로 정할것인가?
  > 올바르게 설계하고 있는지 궁금한가? 코드를 작성하라

## 구현을 통한 검증

- `Movie`에 전송하는 메시지 시그니처를 `calculateMovieFee`로 송신자의 의도를 표현한다.

### `DiscountCondition` 개선하기

- 새로운 할인조건 추가 : `isSatisfiedBy` 메소드 수정필요
- 순번조건 판단로직 변경 : `isSatisfiedBySequence` 메소드 수정
- 기간조건을 판단하는 로직이 변경되는 경우 : `isSatisfiedByPeriod` 메서드 내부구현 수정
  > 낮은 응집도 -> 변경의 이유에 따라 클래스를 분리해야 한다.
- 서로다른 이유로 변경되는 두 메서드를 가지는 `DiscountCondition` 클래스의 응집도는 낮아질 수 밖에 없다.

#### 코드를 통해 변경의 이유를 파악하는 방법

- 인스턴스 변수가 초기화 되는 시점을 살펴보자. 응집도가 낮은 클래스는 객체속성중 일부만 초기화 한다.
- 함께 초기화 되는 속성을 기준으로 코드를 분리해야 한다.
- 메서드들이 인스턴스 변수를 사용하는 속성에 따라 그룹이 나뉜다면 응집도가 낮다.

#### 타입 분리하기

- DiscountCondition -> PeriodCondition / SequenceCondition으로 분리
- 분리하고 Interface / Implement 로 나눠준다. : THIS IS Polymorphism!

#### Protected Variation Pattern

- `DiscountCondition` 덕분에 새로운 할인조건이 추가되거나 할인조건의 구현이 변경되어도 `Movie`는 코드수정이 필요없다. `변경을 캡슐화` 한다.

### `Movie` 개선하기

- 구현을 공유할 필요가 있어서 `abstract`를 이용해서 역할을 구현한다.

### 변경과 유연성

1. 코드를 이해하기 쉽고 수정하기쉽게 최대한 단순하게 설계한다.
2. 코드를 수정하지 않고도 변경을 수용할 수 있도록 코드를 더 유연하게 만든다.

- `DiscountPolicy` 를 분리하고, Movie에 `합성` 한다.

## 책임주도 설계의 대안

- 잘 모르겠으면 일단 동작하는 코드를 만든다.
- 그리고 겉으로 드러나는 동작이 바뀌지 않게 고쳐나간다 REFACTORING!
- `ReservationAgency.ts`를 가지고 살펴보면 - 하나의 명확한 기능만 수행하는 메서드로 잘개 쪼갠다. - 작고, 명확하며, 한가지 일에 집중하는 응집도 높은 메서드는 변경 가능한 설계를 이끌어 내는 기반이 된다. - 여전히 `ReservationAgency` 자체의 응집도는 여전히 낮고, 응집도를 높이기 위해서는 변경의 이유가 다른 메서드들을 적절한 위치로 분배해야 한다. 적절한 위치란 바로 각 메서드가 사용하는 데이터를 정의하고 있는 클래스이다!

# Chapter 6 : 메시지와 인터페이스

- 객체지향 애플리케이션의 가장 중요한 재료는 객체들이 주고받는 `메시지` 다
- 메시지들이 객체의 퍼블릭 인터페이스를 구성한다.

## 협력과 메시지

### 클라이언트-서버 모델

- 메시지를 매개로 하는 요청과 응답의 조합이 두 객체 사이의 협력을 구성한다.

### 메시지와 메시지 전송

- 메시지(Message) - 한객체가 다른 객체에게 도움을 요청 : Message sending, Message passing - Message sender, Message receiver - Message는 Operation 과 argument, receiver 로 구성된다. - `condition.isSatisfiedBy(screening)` - `수신자.오퍼레이션(인자)`

### 메시지와 메서드

- 메시지를 수신했을 때 실제로 실행되는 함수 또는 프로시저를 `메서드`라 부른다.
  > 계산을 메시지와 메서드로 분리하고, 실행시간에 수신자의 클래스에 기반해서 메시지를 메서드에 바인딩하는 것은. 일반 적인 프로시저 호출 관점에서는 아주 작은 변화처럼 보이지만, 이 작은 변화가 큰 차이를 만든다

### 퍼블릭 인터페이스와 오퍼레이션

- 퍼블릭 인터페이스에 포함된 메시지를 오퍼레이션이라 한다.
- 메시지를 수신했을 때 실제 실행되는 코드를 메서드라 한다.
  > 메서드는 오퍼레이션의 구현이다. 메서드는 오퍼레이션과 연관된 알고리즘 또는 절차를 명시한다.

### 시그니처

- 오퍼레이션 이름과 파라미터 목록을 `시그니처`라 부른다.
- 오퍼레이션은 실행코드 없이 시그니처만을 정의한 것이다.
- 다형성이란 동일한 오퍼레이션 호출에 대해 서로 다른 메서드들이 실행되는것이라 정의할 수 있다.

>

## 용어정리

- 메시지 : 객체가 다른 객체와 협력하기 위해 사용하는 의사소통 매커니즘. 일반적으로 객체의 오퍼레이션이 실행되도록 요청하는 것을 `메시지 전송`이라고 부른다. 메시지는 협력에 참여하는 전송자와 수신자 양쪽 모두를 포함하는 개념이다.
- 오퍼레이션 : 객체가 다른 객체에게 제공하는 추상적인 서비스이다. 메시지가 전송자와 수신자 사이의 협력 관계를 강조하는 데 비해, 오퍼레이션은 메시지를 수신하는 객체의 인터페이스를 강조한다. 다시 말해서, 메시지의 전송자는 고려하지 않은 채 메시지 수신자의 관점만을 다룬다. 메시지 수신이란 메시지에 대응되는 객체의 오퍼레이션을 호출하는 것을 의미한다.
- 메서드 : 메시지에 응답하기 위해 실행되는 코드 블록을 메서드라 부른다. 메서드는 오퍼레이션의 구현이다. 동일한 오퍼레이션이라고 해도 메서드는 다를 수 있다. 오퍼레이션과 메서드의 구분은 다형성의 개념과 연결된다.
- 퍼블릭 인터페이스 : 객체가 협력에 참여하기 위해 외부에서 수신할 수 있는 메시지의 묶음. 클래스의 퍼블릭 메서드들의 집합이나 메시지의 집합을 가리키는 데 사용된다. 객체를 설계할 때 가장 중요한 것은 훌륭한 퍼블릭 인터페이스를 설계하는 것이다.
- 시그니처 : 시그니처는 오퍼레이션이나 메서드의 명세를 나타낸 것으로, 이름과 인자의 목록을 포함한다. 대부분의 언어는 시그니체의 일부로 반환 타입을 포함하지 않지만 반환타입을 시그니처의 일부로 포함하는 언어도 존재한다.

## 인터페이스와 설계 품질

- 좋은 인터페이스란 최소한의 인터페이스(꼭 필요한 오퍼레이션 만을 포함)와 추상적인 인터페이스(어떻게가 아니라 무엇을 하는지?)라는 조건을 만족해야 한다.
- 가장 좋은 방법은 책임설계 방법을 따르는 것이다. 메시지를 먼저 선택함으로, 협력과는 무관한 오퍼레이션이 인터페이스에 스며드는 것을 방지한다.
- 퍼블릭 인터페이스의 품질에 영향을 미치는 원칙과 기법 - 디미터 법칙 - 묻지말고 시켜라 - 의도를 드러내는 인터페이스 - 명령-쿼리 분석

### 디미터법칙

- 객체의 내부구조에 강하게 결합되지 않도록 협력 경로를 제한하라. (접근 경로를 제한한다) - 낯선 자에게 말하지 말라 - 오직 인접한 이웃하고만 말해라 - 오직 하나의 `.` 만 사용하라
- 디미터법칙을 따르려면 - M의 인자로 전달된 클래스 - C의 인스턴스 변수의 클래스
- 또는 - this - 메서드의 매개변수 - this의 속성 - this의 속성인 컬렉션의 요소 - 메서드 내에서 생성된 객체
- 디미터 법칙을 지키지 않는 전형적인 코드

```
screening.getMovie().getDiscountConditions();
```

### 묻지말고 시켜라

> 훌륭한 메시지는 객체 상태에 관해 묻지 말고, 원하는 것을 시켜야 한다 (Tell, Don't Ask!)

### 의도를 드러내는 인터페이스

- 인터페이스는 객체가 어떻게 하는지가 아니라 무엇을 하는지를 서술해야 한다.
- 어떻게 하는지를 드러내는 코드

```ts
class PeriodCondition {
  isSatisfiedByPeriod(screening: Screening): boolean;
}

class SequenceCondition {
  isSatisfiedBySequence(screening: Screening): boolean;
}
```

- 무엇을 하는지를 드러내는 코드

```ts
class PeriodCondition implements DiscountCondition {
	isSatisfiedBy(screening: Screening): boolean
}

class SequenceCondition implements DiscountCondition {
	isSatisfiedBy(screening: Screening): boolean
}

interface DiscountCondition {
	isSatisfiedBy(screening: Screening): boolean
```

- 클라이언트 관점에서 동일한 작업을 수행하는 메서드들을 하나의 타입 계층으로 묶을 수 있는 가능성이 커지게 된다.
- `의도를 드러내는 선택자(Intention Revealing Selector` : 하나의 구현을 가진 메서드의 이름을 일반화 하도록 하는 훈련 => 매우 다른 두번째 구현을 상상하고, 이 메서드에 동일한 이름을 붙인다고 상상하면, 할수 있는 한 가장 추상적인 이름을 메서드에 붙이게 될 것이다.

### 함께 모으기

```
// 전형적인 디미터 법칙 위반
audience.getBag().minusAmount(ticket.getFee())
```

- 클라이언트에게 내부구현이 노출되고, 작은 요구사항 변경에도 쉽게 무너지는 불안정한 코드가 되어버린다.

```
Ticket ticket = ticketSeller.getTickOfficer().getTicket();
audience.getBag().minusAmount(ticket.getFee());
```

- 오퍼레이션의 이름은 `협력` 이라는 문맥을 반영해야 한다.
- 오퍼레이션은 `클라이언트`가 객체에게 무엇을 원하는지를 표현해야 한다. 객체 자신이 아닌 클라이언트의 의도를 표현하는 이름을 가져야 한다. - 디미티 법칙 - 묻지말고 시켜라 - 의도를 드러내는 인터페이스

## 원칙의 함정

### 결합도와 응집도의 충돌

- 묻지마 코드로 변경해야 하는 코드 - 질문하고 : 어떤 객체의 상태를 물어본다 - 판단하고 : 반환된 상태를 기반으로 결정을 내린다 - 상태변경 : 결정에 따라 객체의 상태를 변경한다.
- Audience에게 위임 메서드를 추가한다.
- 결합도를 낮추고 응집도를 높이는 방향으로 가야한다.
- 객체는 내부구조를 숨겨야 하므로 디미터 법칙을 따르는것이 좋지만, 자료구조라면 당연히 내부구조를 노출해야 하므로 디미터 법칙을 적용할 필요가 없다.
- `설계는 트레이드 오프의 산물이다.`

### 명령-쿼리 분리 원칙

- `프로시저` : 정해진 절차에 따라 내부의 사애를 변경하는 루틴의 한 종류. (Has side-effect)
- `함수`: 필요한 값을 계산해서 반환하는 루틴의 한 종류 (no side-effect)
  > 질문이 답변을 수정해서는 안된다
- 객체의 상태를 변경하는 명령은 반환값을 가질 수 없다.
- 객체의 정보를 반환하는 쿼리는 상태를 변경할 수 없다.

### 명령-쿼리를 분리하면 장점

- 명령과 쿼리를 뒤섞으면 실행결과를 예측하기 어려워지게 된다.
- 겉으로는 쿼리로 보이지만, 내부적으로 부수효과를 가지는 메서드는 이해하기 어렵고, 잘못 사용하기 쉬우며, 버그를 양산한다.

```ts
class Event {
	isSatisfied(schedule: RecurringSchedule): boolean
	reschedule(schedule: RecurringSchedule): void
```

- 메서드가 값을 반환하면 : 쿼리 (순수함수)
- 메서드가 값을 반환하지 않으면 : 명령 (부수효과)

```
if(!event.isSatisfied(schedule)) {
	event.reschedule();
}
```

### 명령-쿼리 분리와 참조 투명성

- 참조투명성 : 어떤 표현식 e가 있을때, e의 값으로, e가 나타나는 모든 위치를 교체하더라도 결과가 달라지지 않는 특성
- 수학의 함수가 대표적인 참조투명성을 가진다.
- `IMMUTABILITY!`

### 책임에 초점을 맞춰라

- 메시지를 먼저 선택하고, 그 후에 메시지를 처리할 객체를 선택한다.

# Chap 7 : 객체분해

- 분해 : 큰 문제를 해결 가능한 작은 문제로 나누는 작업
- 추상화 : 불필요한 정보를 제거하고 현재의 문제 해결에 필요한 핵심만 남기는 작업

## 프로시저 추상화와 데이터 추상화

### 프로시저 추상화 : 무엇을 해야하는지를 추상화

- 기능분해 / 알고리즘 분해

### 데이터 추성화 : 어떠한 것을 알아야 하는지 추상화

- 타입추상화(Abstract Data Type)
- 프로시저 추상화(Object-Oriented) - 역할과 책임을 수행하는 객체 - 협력하는 공동체

## 프로시저 추상화와 기능분해

>

- 직원의 급여를 계산한다 - 사용자로부터 소득세율을 입력받는다 - '세율을 입력하세요' 라는 문장을 화면에 출력한다. - 키보드를 통해 세율을 입력받는다. - 직원의 급여를 계산한다 - 전역변수에 저장된 직원의 기본급 정보를 얻는다. - 급여를 계산한다. - 양식에 맞게 결과를 출력한다. - '이름: {직원명}, 급여: {계산된 급여}' 형식에 따라 출력 문자열을 생성한다.

## 하향식 기능분해의 문제점

- 하나의 메인함수라는 비현실적인 아이디어
- 메인함수의 빈번한 재설계
- 코드 안에서 비즈니스 로직과 사용자 인터페이스가 결합된다.
- 하향식 접근법의 첫번쨰 질문은 `무엇(what)`이 아니라 `어떻게(how)` 이다.
- 함수는 상위 함수가 강요하는 Context 와 강하게 결합된다.
- 데이터 변경으로 인한 파급효과. : 어떤 데이터를 어떤 함수가 사용하는지 모른다.
  > 작은 프로그램과, 개별 알고리즘을 문서화 하고 서술하는데는 하향식 분해가 유용하다.

## 모듈

### 정보은닉, 모듈

- 함께 변경되는 부분을 하나의 구현단위로 묶고, 퍼블릭 인터페이스를 통해서만 접근하도록 만든다.
- `정보은닉` : 자주 변경되는 부분을 덜 변경되는 인터페이스 뒤로 감춰야 한다. - 복잡성 : 외부에 추상화된 개념을 제공하기 위해 복잡함을 감춘다. - 변경가능성 : 변경 가능한 설계 결정을 모듈 내부로 감춘다. (파급도를 낮출 수 있다.)
- 모듈은 책임의 할당.
- 모듈은 데이터를 설계의 중심요소로 부각시킨다.
- 모듈은 인스턴스 개념을 제공하지 않는다.

## 데이터 추상화와 추상데이터타입 (ADT)

### Abstract Data Type

## 클래스

### 클래스는 ADT 인가?

- ADT : 상속과 다형성을 지원하지 않음, 타입을 추상화 - 오퍼레이션을 기준으로 타입을 묶는다 - 인스턴스 변수에 저장된 값을 기준으로 메서드 내에서 타입을 명시적으로 구분하는 방식 (isHourly 를 통해 if로 구분) - 오퍼레이션이 추가된다면 ADT가 유리!
- OOP : 상속과 다형성 지원!, 절차를 추상화 - 타입을 기준으로 오퍼레이션을 묶는다. - 동일한 메시지에 대해 서로 다르게 반응한다 -> 다형성 -> 절차 추상화(절차에 대한 차이를 감춘다) - if 대신에 `Replace Type code with Class` 방식으로 처리. - 새로운 타입이 추가된다면 OOP가 유리!
- `Open-Closed Principle` 개방-폐쇄 원칙 : 기존 코드에 아무런 영향을 미치지 않고 새로운 객체 유형과 행위를 추가할 수 있는 객체지향의 특성

# Chap 8 의존성 관리하기

## 의존성 이해하기

### 변경과 의존성

- 의존성 : 의존되는 요소가 변경될때 의존하는 요소도 함께 변경될 수 있다는 것을 의미 -> 변경에 의한 영향의 전파 가능성

### 의존성의 전이

- 의존성이 전이될 가능성에 따라 직접의존성 / 간접의존성으로 나눔

### 런타임(실행시점) 의존성, 컴파일타임(코드 그자체) 의존성

- 어떤 클래스의 인스턴스가 다양한 클래스 인스턴스와 협력하기 위해서는, 협력할 인스턴스의 구체적인 클래스를 알아서는 안된다. 실제로 협력할 객체가 어떤 것인지는 런타임에 해결해야 한다.
- 컴파일 타임 구조와 런타임 구조의 사이의 거리가 멀면 멀수록 설계가 유연해지고 재사용이 가능해진다.

### 컨텍스트 독립성

- 설계가 유연해지려면, 자신이 실행될 컨텍스트에 대한 구체적인 정보를 최대한 적게 알아야 한다.
- 적으면 적을수록 더 다양한 컨텍스트에서 재사용될 수 있기 때문이다.

### 의존성 해결하기

- 컴파일 타임 의존성을 실행 컨텍스트에 맞게 적절한 런타임 의존성으로 교체하는 것을 의존성 해결이라 한다. - 객체를 생성하는 시점에 생성자를 통해 의존성 해결 - 객체 생성 후 setter 메서드를 통해 의존성 해결 - 메서드 실행 인자를 이용해 의존성 해결 (일시적으로만 알아도 될 경우에)

## 유연한 설계

### 의존성과 결합도

- 의존성을 바람직하게 만들어라. 자신이 전송하는 메시지를 이해할 수 있다면 어떤 타입의 객체와 협력하더라도 상관이 없도록 만들어야 한다.
- 바람직한 의존성? 재사용성과 관련이 있다.컨텍스트 독립적인 의존성이 바람직하다.
- 결합도 (Coupling)
- 의존성은 존재하거나 존재하지 않거나. (Existence)
- 결합도는 의존성의 상대적인 강도

### 지식이 결합을 낳는다

- 서로에 대해 알고 있는 지식의 양이 결합도를 결정한다.
- 더 많이 알수록 더 많이 결합된다. 더 많이 알고있다는 것은 더 적은 컨텍스트에서 재사용 가능하다는 것을 의미한다.

### 추상화에 의존하라

- 구체 클래스 의존성
- 추상 클래스 의존성 - 구체클래스에 비해 알아야 할 지식의 양이 적다.
- 인터페이스 의존성 - 상속 계층을 몰라도 협력이 가능해진다.

### 명시적인 의존성

- 모든 경우에 의존성은 명시적(Explicit)으로 Public 인터페이스에 노출된다.
- 명시적이지 않으면, 내부구현을 살펴보거나, 변경이 필요할때 내부구현을 같이 변경해야 한다.

### new는 해롭다

- new를 사용하는 클라이언트는 구체클랫에 의존하게 된다.
- new를 사용하면 생성자를 호출할때의 인자도 알아야 한다. 알아야 하는 지식의 양이 늘어나게 된다.
- 인스턴스 생성 로직과, 인스턴스 사용 로직을 분리해야 한다.

### 가끔은 생성해도 무방하다

- 디폴트 값으로 생성하고, 필요시에 setter로 교체하거나
- 메소드 오버로딩으로 디폴트 값을 정한다

### 표준 클래스에 대한 의존은 해롭지 않다

- 표준클래스 처럼 변경이 거의 없는 클래스에는 의존하거나 직접 인스턴스를 생성해도 문제가 없다.

### 컨텍스트 확장하기

- 할인정책이 존재하지 않는것을 `null` 예외로 처리하지말고,
- `DiscountPolicy` 할인정책의 한 종류로 간주한다.
- 그러면, `if`문을 제거할 수 있다.
- 중복할인도 `DiscountPolicy`를 따르면서, 내부적으로 여러 할인조건을 List로 받아서 구현하면, 인터페이스를 변경하지 않고도 확장/구현이 가능하게 된다.

### 조합 가능한 행동

- 클래스의 인스턴트슬 생성하는 코드를 보는것 만으로도 객체가 어떤 일을 하는지를 쉽게 파악할 수 있다. -> Declarative (선언적으로 객체의 행동을 정의)
- 유연하고 재사용 가능한 설계는 작은 객체들의 행동을 조합함으로써 새로운 행동을 이끌어낼 수 있는 설계다.
- 객체들의 조합을 선언적으로 표현함으로써, 객체들이 무엇을 하는지를 표현하는 설계
