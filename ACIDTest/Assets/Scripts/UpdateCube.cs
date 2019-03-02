using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UpdateCube : MonoBehaviour
{
    [SerializeField]
    private MongoConnection mongoCon;
    // Start is called before the first frame update
    void Start()
    {
        mongoCon.GetComponent<MongoConnection>();

    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
