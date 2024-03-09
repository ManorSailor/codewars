/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize = 2; // Unsaid requirement
    int* indices = malloc((*returnSize) * sizeof(int));
    int map[numsSize];

    // Sanity check
    if (!indices)
        return NULL;

    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[j] == target - nums[i]) {
                indices[0] = i;
                indices[1] = j;

                return indices;
            }
        }
    }
    return indices;
}