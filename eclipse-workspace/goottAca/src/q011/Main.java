package q011;
//11문제 ~ 12번 문제

public class Main {

	public static void main(String[] args) {
		Character elf = new Character("���ǽ�", 100, 100, 10);
		Monster orc = new Monster("��ũ����", 50, 50, 5);
		elf.info();
		orc.info();

		// �ο�
		int elfAtk = elf.getRandomAtk();
		int orcAtk = orc.getRandomAtk();
		orc.currentHp -= elfAtk;
		elf.currentHp -= orcAtk;
		System.out.println(elf.name + "�� " + orc.name + "���� " 
				+ elfAtk + " ��ŭ ���ظ� �־����ϴ�.");
		System.out.println(orc.name + "�� " + elf.name + "���� " 
				+ orcAtk + " ��ŭ ���ظ� �־����ϴ�.");

		elf.info();
		orc.info();
		
	}

}
