package QQQ;

public class q12 {
		public class Compter {
			int sum1(int[] values) {
				int sum = 0;
				for(int i = 0; i<values.length; i++) {
				sum += values[i];
				}	
				
				return sum;
			}
			
			int sum2(int ... values) {
				int sum = 0;
				for(int i=0; i<values.length; i++) {
					sum += values[i];
				}
				return sum;
				}
			}
			
	}


