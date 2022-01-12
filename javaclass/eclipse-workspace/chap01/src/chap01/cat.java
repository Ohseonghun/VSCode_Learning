package chap01;

public class cat {

	public static void main(Staring[] args) {
		Cat cat = new Cat();
		
		int random = (int)(Math.random() * 6+1)
		cat.age = random;
		cat.name = "야옹이";
		cat.Family = "코숏";
		cat.color = "검은색";
		
		cat.info();
			
	}
}

public class Cat{
	
	String name;
	int age;
	String Family;
	String color;
	
	void info( ) {
		String s =
				"이름" +name;
				+"나이" + age;
				+"품종" + family;
				+"털색" + color;
			System.out.println(s);
	}
}
