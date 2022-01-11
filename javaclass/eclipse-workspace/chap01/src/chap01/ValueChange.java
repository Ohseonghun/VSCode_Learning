package chap01;
import java.util.Scanner;

public class ValueChange {
	public static void main(String[] args) {
		byte byteValue = 10;
		int intValue = byteValue;
		System.out.println(intValue);
		
		char charVlaue = '가';
		intValue = charVlaue;
		System.out.println("가의 유니코드=" + intValue);
		
		intValue = 200;
		double doudleValue = intValue;
		System.out.println(doudleValue);
		
        System.out.println("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|\n");
        
        Scanner sc = new Scanner(System.in);
        
        int a, b;
        
        a = sc.nextInt()	;
        b = sc.nextInt()	;
        
		System.out.println(a + b);
	}
	
}
