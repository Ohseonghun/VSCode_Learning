package chap01;

public class cat {

	public static void main(Staring[] args) {
		Cat cat = new Cat();
		
		int random = (int)(Math.random() * 6+1)
		cat.age = random;
		cat.name = "�߿���";
		cat.Family = "�ڼ�";
		cat.color = "������";
		
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
				"�̸�" +name;
				+"����" + age;
				+"ǰ��" + family;
				+"�л�" + color;
			System.out.println(s);
	}
}
