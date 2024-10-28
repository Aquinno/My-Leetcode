public class Solution {
    public IList<IList<int>> FindDifference(int[] nums1, int[] nums2) {
        List<int> answer0 = new List<int>();
        List<int> answer1 = new List<int>();
        IList<IList<int>> answer = new List<IList<int>> { answer0, answer1 };

        for (int i = 0; i < nums1.Length; i++){
            if (!Array.Exists(nums2, x => x == nums1[i]) && !answer0.Contains(nums1[i])){
                answer0.Add(nums1[i]);
            }
        }    
        for (int i = 0; i < nums2.Length; i++){
            if (!Array.Exists(nums1, x => x == nums2[i]) && !answer1.Contains(nums2[i])){
                answer1.Add(nums2[i]);
            }
        }
        return answer;       
    }
}

//Now i know if i sued something called "hashset", that would make my script more optmized. So, since i don't know how to use it, thats my solution.
